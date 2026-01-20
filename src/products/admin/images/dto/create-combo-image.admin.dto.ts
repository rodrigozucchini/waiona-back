import { IsInt, IsPositive } from 'class-validator';

export class CreateComboImageAdminDto {
  @IsInt()
  @IsPositive()
  comboId: number; // ID del combo

  @IsInt()
  @IsPositive()
  imageId: number; // ID de la imagen
}
