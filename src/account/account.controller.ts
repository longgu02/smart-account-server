import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { AccountService } from './account.service'
import { LoginDto } from 'src/auth/dto/log-in.dto'
import { SignMessageDto } from './dto/signMessage.dto'
import { AddAddressDto } from './dto/addressBook.dto'
import { RegisterDto } from './dto/register.dto'
import { MailerService } from '@nestjs-modules/mailer'

@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly mailService: MailerService
  ) {}

  @Get('/tx-otp/:email')
  getTxOtp(@Param('email') email: string) {
    const OTP = this.accountService.generateOTP(email)
    const message = `Your OTP is ${OTP}. Enter this OTP to confirm your transaction. Do not share this OTP to anyone!`

    this.mailService.sendMail({
      from: 'No Reply <accountify@gmail.com>',
      to: email,
      subject: `Transaction OTP`,
      text: message
    })

    return {
      message: 'success'
    }
  }

  @Get('/register-otp/:email')
  getOtp(@Param('email') email: string) {
    const OTP = this.accountService.generateOTP(email)
    const message = `Your OTP is ${OTP}. Do not share this OTP to anyone!`

    this.mailService.sendMail({
      from: 'No Reply <accountify@gmail.com>',
      to: email,
      subject: `Register OTP`,
      text: message
    })

    return {
      message: 'success'
    }
  }

  @Get('/check-otp/:email/:otp')
  checkOtp(@Param('email') email: string, @Param('otp') otp: string) {
    return this.accountService.checkOtp(email, otp)
  }

  @Post()
  createAccount(accountInfo: RegisterDto) {
    return this.accountService.createAccount(accountInfo.email, accountInfo.password, accountInfo.otp)
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
