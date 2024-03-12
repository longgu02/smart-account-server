import { Controller, Get } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getAllAccount() {
    return this.accountService.getAllAccount();
  }

  @Get('/calculate')
  getAccountCalculated() {
    return this.accountService.calculateAccount();
  }

  @Get('/transfer')
  transfer() {
    return this.accountService.transfer();
  }
}
