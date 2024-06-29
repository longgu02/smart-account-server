import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { AccountService } from 'src/account/account.service'
import { WRONG_USERNAME_OR_PASSWORD } from 'src/constant/error'
import { compare } from 'bcrypt'
import { LoginDto } from './dto/log-in.dto'
import { SignUpDto } from './dto/sign-up.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async verifyAccessToken(accessToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync(accessToken, {
        secret: this.configService.get<string>('JWT_SECRET')
      })

      return payload
    } catch {
      throw new UnauthorizedException()
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.accountService.findOne(loginDto.email)
    if (!user) {
      throw new UnauthorizedException({ ...WRONG_USERNAME_OR_PASSWORD })
    }

    const isMatched = await this.verifyPassword(loginDto.password, user.password)
    if (!isMatched) {
      throw new UnauthorizedException({ ...WRONG_USERNAME_OR_PASSWORD })
    }

    //user.keyHash, user.salt, loginDto.password
    const accountAddress = user.possessedAccounts

    const payload = { email: user.email, address: accountAddress }
    const jwt = await this.jwtService.signAsync(payload)

    return { jwt: jwt, address: accountAddress, publicKey: user.address }
  }

  async signUp(signUpDto: SignUpDto) {
    const user = await this.accountService.createAccount(signUpDto.email, signUpDto.password)
    return user
  }

  private verifyPassword(passwordToVerify: string, hash: string): Promise<boolean> {
    return compare(passwordToVerify, hash)
  }
}
