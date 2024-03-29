import { IsString } from 'class-validator'

export class SignMessageDto {
  @IsString()
  email: string

  @IsString()
  password: string

  @IsString()
  message: string
}
