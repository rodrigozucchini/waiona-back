import { IsString, IsNotEmpty, MaxLength, IsInt, Min } from 'class-validator';

export class UpdateImageAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  url: string; // URL de la imagen

  @IsInt()
  @Min(0)
  order: number; // orden de presentación
}
