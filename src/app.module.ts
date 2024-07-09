import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AccountModule } from './account/account.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { SessionModule } from './session/session.module'
import { PluginModule } from './plugin/plugin.module'
import { TransactionModule } from './transaction/transaction.module'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MailerModule.forRoot({
      transport: {
        host: process.env.EMAIL_HOST,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      }
    }),
    AccountModule,
    AuthModule,
    SessionModule,
    PluginModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
