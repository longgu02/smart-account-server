import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { AccountService } from './account.service'
import { LoginDto } from 'src/auth/dto/log-in.dto'
import { SignMessageDto } from './dto/signMessage.dto'
import { AddAddressDto } from './dto/addressBook.dto'

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  createAccount(accountInfo: LoginDto) {
    return this.accountService.createAccount(accountInfo.email, accountInfo.password)
  }

  @Get('/address/:eoa')
  async calculateAddress(@Param('eoa') eoaAddress: string) {
    const accounts = await this.accountService.fetchAddressAccount(eoaAddress)
    if (!accounts || accounts.length <= 0) {
      await this.accountService.storeEOA(eoaAddress)
      return [await this.accountService.calculateAccount(eoaAddress)]
    }
    return accounts
  }

  // @Post('/eoa-connect/:address')
  // async connectEOA(@Param('address') eoaAddress: string){
  //   const
  // }

  @Get()
  getAllAccount() {
    return this.accountService.getAllAccount()
  }

  @Post('/sign-message')
  signMessage(@Body() signMessageDto: SignMessageDto) {
    return this.accountService.signMessage(signMessageDto)
  }

  @Put('/add-address')
  addAddressBookContact(@Body() contact: AddAddressDto) {
    return this.accountService.addAddressBookContact(contact.account, contact.address, contact.name)
  }

  @Get('/:account/address-book')
  getAddressBook(@Param('account') account: string) {
    return this.accountService.getAddressBook(account)
  }
}
