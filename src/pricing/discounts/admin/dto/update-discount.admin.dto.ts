import { IsOptional, IsNumber, IsBoolean, Min } from 'class-validator';

export class UpdateDiscountAdminDto {
  @IsNumber()
  discountTypeId: number;

  @IsNumber()
  @Min(0)
  value: number;

  @IsBoolean()
  isPercentage: boolean;
}
