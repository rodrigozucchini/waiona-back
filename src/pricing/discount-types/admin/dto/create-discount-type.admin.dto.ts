import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

export class CreateDiscountTypeAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  code: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}
