import { StockMovementType } from '../../common/enums/stock-movement-type.enum';

export class StockMovementResponseAdminDto {
  id: number;
  productId: number;
  quantity: number;
  type: StockMovementType;
  note?: string;

  createdAt: Date;
}
