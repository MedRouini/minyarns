import { IsBoolean, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsNumber({}, { message: 'price must be a number' })
  @Min(0, { message: 'price must be greater than or equal to 0' })
  price: number;
  @IsString()
  description: string;
  @IsString()
  imageUrl: string;

  @IsBoolean()
  isPopular: boolean;

  @IsNumber()
  quantity: number;
}
