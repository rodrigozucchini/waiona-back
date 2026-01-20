import { IsString, MaxLength, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateComboAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string; // nombre del combo

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description: string; // descripción opcional
}
