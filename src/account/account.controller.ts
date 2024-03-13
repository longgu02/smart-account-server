import { Controller, Get, Post } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { AccountService } from './account.service'
import { LoginDto } from 'src/auth/dto/log-in.dto'

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  createAccount(accountInfo: LoginDto) {
    return this.accountService.createAccount(accountInfo.email, accountInfo.password)
  }

  @Get()
  getAllAccount() {
    return this.accountService.getAllAccount()
  }

  // @Get('/calculate')
  // getAccountCalculated() {
  //   return this.accountService.calculateAccount()
  // }

  // @Get('/transfer')
  // transfer() {
  //   return this.accountService.transfer()
  // }
}
