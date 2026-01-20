import { IsInt, IsPositive, IsOptional, Min } from 'class-validator';

export class CreateProductToComboAdminDto {
  @IsInt()
  @IsPositive()
  comboId: number; // ID del combo

  @IsInt()
  @IsPositive()
  productId: number; // ID del producto

  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number; // cantidad de productos en el combo, opcional, mínimo 1
}
