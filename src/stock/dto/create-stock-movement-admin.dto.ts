import { IsInt, Min, IsEnum, IsOptional, IsString } from 'class-validator';
import { StockMovementType } from '../../common/enums/stock-movement-type.enum';

export class CreateStockMovementAdminDto {
  @IsInt()
  productId: number;

  @IsInt()
  quantity: number; // puede ser + o -

  @IsEnum(StockMovementType)
  type: StockMovementType;

  @IsOptional()
  @IsString()
  note?: string;
}