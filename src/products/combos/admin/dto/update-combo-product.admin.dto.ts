import { IsInt, IsPositive } from 'class-validator';

export class UpdateComboProductAdminDto {
  @IsInt()
  @IsPositive()
  comboId: number; // ID del combo

  @IsInt()
  @IsPositive()
  productId: number; // ID del producto

  @IsInt()
  @IsPositive()
  quantity: number; // cantidad de productos en el combo
}
