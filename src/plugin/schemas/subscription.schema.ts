import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsBoolean } from 'class-validator'
import { HydratedDocument } from 'mongoose'

export type SubscriptionDocument = HydratedDocument<Subscription>

@Schema()
export class Subscription {
  @Prop()
  beneficiary: string

  @Prop()
  subscriber: string

  @Prop()
  amount: string

  @Prop()
  enabled: boolean

  @Prop()
  lastReceived: string
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription)
