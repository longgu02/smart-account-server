import { Prop, Schema } from '@nestjs/mongoose'

enum SessionType {
  NATIVE,
  ERC20,
  ERC721
}

// validUntil, validAfter, sessionVerificationModule address, validationData, merkleProof, signature
@Schema()
export class Session {
  @Prop()
  publicKey: string

  @Prop()
  validAfter: number

  @Prop()
  validUntil: number

  @Prop()
  sessionVerificationModule: string

  @Prop()
  type: SessionType

  @Prop()
  limit: string
}
