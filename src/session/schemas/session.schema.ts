import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type AccountDocument = HydratedDocument<Session>

// validUntil, validAfter, sessionVerificationModule address, validationData, merkleProof, signature
@Schema()
export class Session {
  @Prop()
  account: string

  @Prop()
  authorized: string

  @Prop()
  receiver: string

  @Prop()
  validAfter: number

  @Prop()
  validUntil: number

  @Prop()
  sessionVerificationModule: string

  @Prop()
  token: string

  @Prop()
  limit: string
}

export const SessionSchema = SchemaFactory.createForClass(Session)
