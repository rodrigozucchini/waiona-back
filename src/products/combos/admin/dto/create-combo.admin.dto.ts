import { IsString, IsNotEmpty, MaxLength, IsOptional } from 'class-validator';

export class CreateComboAdminDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  name: string; // nombre del combo

  @IsOptional()
  @IsString()
  @MaxLength(500)
  description?: string; // descripción opcional
}
