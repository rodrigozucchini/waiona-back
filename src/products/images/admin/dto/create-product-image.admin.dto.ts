import { IsInt, IsPositive } from 'class-validator';

export class CreateProductImageAdminDto {
  @IsInt()
  @IsPositive()
  productId: number; // ID del producto

  @IsInt()
  @IsPositive()
  imageId: number; // ID de la imagen
}
