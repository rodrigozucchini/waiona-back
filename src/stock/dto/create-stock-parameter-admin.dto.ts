import { IsInt, Min, IsOptional, IsBoolean } from 'class-validator';

export class CreateStockParameterAdminDto {
  @IsInt()
  @Min(1)
  productId: number;

  @IsInt()
  @Min(0)
  minStock: number;

  @IsOptional()
  @IsInt()
  maxStock?: number;

  @IsInt()
  @Min(0)
  criticalStock: number;

  @IsBoolean()
  allowNegativeStock: boolean;
}
