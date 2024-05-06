import { IsString } from 'class-validator'

export class AddAddressDto {
  @IsString()
  account: string

  @IsString()
  address: string

  @IsString()
  name: string
}
