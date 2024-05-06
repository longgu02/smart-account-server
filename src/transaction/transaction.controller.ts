import { Controller, Get, Param } from '@nestjs/common'
import { TransactionService } from './transaction.service'

@Controller('/tx')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('/:account')
  async getAccountTxList(@Param('account') account: string) {
    const data = await this.transactionService.getAccountTxList(account)
    console.log(data)
    return data
  }
}
