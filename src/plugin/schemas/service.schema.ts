import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { IsString } from 'class-validator'
import { HydratedDocument } from 'mongoose'

export type ServiceDocument = HydratedDocument<Service>

@Schema()
export class Service {
  @Prop()
  name: string

  @Prop()
  address: string

  @Prop()
  amount: string

  @Prop()
  period: number

  @Prop()
  description: string

  @Prop()
  logo: string
}

export const ServiceSchema = SchemaFactory.createForClass(Service)
