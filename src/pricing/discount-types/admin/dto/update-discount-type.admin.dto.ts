import { IsString, MaxLength } from 'class-validator';

export class UpdateDiscountTypeAdminDto {
  @IsString()
  @MaxLength(50)
  code: string;

  @IsString()
  @MaxLength(100)
  name: string;
}
