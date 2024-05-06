import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TransactionController } from './transaction.controller'
import { TransactionService } from './transaction.service'

@Module({
  imports: [],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
