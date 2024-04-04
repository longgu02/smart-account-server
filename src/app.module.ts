import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AccountModule } from './account/account.module'
import { MongooseModule } from '@nestjs/mongoose'
import { AuthModule } from './auth/auth.module'
import { SessionModule } from './session/session.module'
import { PluginModule } from './plugin/plugin.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AccountModule,
    AuthModule,
    SessionModule,
    PluginModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
