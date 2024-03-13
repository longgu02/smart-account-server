import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { AccountType } from 'src/types/interfaces'

export type AccountDocument = HydratedDocument<Account>

@Schema()
export class Account {
  @Prop()
  type: AccountType

  @Prop()
  email: string

  @Prop()
  password: string

  @Prop()
  address: string

  @Prop()
  addressBook: Array<string>

  @Prop()
  signer: Array<string>

  @Prop()
  keyHash: string

  @Prop()
  salt: string
}

export const AccountSchema = SchemaFactory.createForClass(Account)
