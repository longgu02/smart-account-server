import { Body, Controller, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDto } from './dto/log-in.dto'
import { SignUpDto } from './dto/sign-up.dto'
import { RegisterDto } from 'src/account/dto/register.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('log-in')
  logIn(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }

  @Post('verify-token')
  verifyAccessToken(@Body('accessToken') accessToken: string) {
    return this.authService.verifyAccessToken(accessToken)
  }

  @Post('sign-up')
  signUp(@Body() signUpDto: RegisterDto) {
    return this.authService.signUp(signUpDto)
  }
}
