import {
  IsOptional,
  IsString,
  MaxLength,
  IsInt,
  IsBoolean,
} from 'class-validator';

export class UpdateCategoryAdminDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @IsOptional()
  @IsInt()
  parentId?: number | null;
}
