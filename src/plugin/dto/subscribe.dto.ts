import { IsString } from 'class-validator'

export class SubscribeDto {
  @IsString()
  signature: string
}
