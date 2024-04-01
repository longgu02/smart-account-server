import { IsNumber, IsString } from 'class-validator'

export class EditSessionDto {
  @IsString()
  id: string

  @IsString()
  account: string

  @IsString()
  authorized: string

  @IsNumber()
  validAfter: number

  @IsNumber()
  validUntil: number

  @IsString()
  sessionVerificationModule: string

  @IsString()
  token: string

  @IsString()
  limit: string
}
