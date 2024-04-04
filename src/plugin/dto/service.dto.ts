import { IsString } from 'class-validator'

export class ServiceDto {
  @IsString()
  name: string

  @IsString()
  address: string

  @IsString()
  amount: string

  @IsString()
  period: number

  @IsString()
  description: string

  @IsString()
  logo: string
}
