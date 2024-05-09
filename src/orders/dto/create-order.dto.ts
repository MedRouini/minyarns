import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  fullName: string;

  @MinLength(8, { message: 'invalid phone number' })
  @MaxLength(8, { message: 'Invalid phone number' })
  phoneNumber: string;

  @IsString()
  governorate: string;

  @IsString()
  delegation: string;

  @Max(9000, { message: 'invalid zip code' })
  @Min(1000, { message: 'invalid zid code' })
  zipCode: number;

  @IsString()
  addressDescription: string;

  @IsOptional()
  note: string;

  @IsNumber()
  totalPrice: number;

  @IsArray()
  productIds: string[];
}
