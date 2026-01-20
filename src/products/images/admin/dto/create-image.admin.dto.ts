import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateImageAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  url: string; // URL de la imagen

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number; // orden de presentación, opcional
}
