import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class SessionDto {
  @IsString()
  @IsNotEmpty()
  account: string

  @IsString()
  @IsNotEmpty()
  authorized: string

  @IsNumber()
  @IsNotEmpty()
  validAfter: number

  @IsNumber()
  @IsNotEmpty()
  validUntil: number

  @IsString()
  @IsNotEmpty()
  sessionVerificationModule: string

  @IsString()
  @IsNotEmpty()
  token: string

  @IsString()
  @IsNotEmpty()
  receiver: string

  @IsString()
  @IsNotEmpty()
  limit: string
}
