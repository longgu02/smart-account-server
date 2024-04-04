import { Module } from '@nestjs/common'
import { PluginController } from './plugin.controller'
import { PluginService } from './plugin.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Subscription, SubscriptionSchema } from './schemas/subscription.schema'
import { Service, ServiceSchema } from './schemas/service.schema'
import { AccountService } from 'src/account/account.service'
import { Account, AccountSchema } from 'src/account/schemas/account.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subscription.name, schema: SubscriptionSchema },
      { name: Service.name, schema: ServiceSchema },
      { name: Account.name, schema: AccountSchema }
    ])
  ],
  controllers: [PluginController],
  providers: [PluginService],
  exports: [PluginService]
})
export class PluginModule {}
