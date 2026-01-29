export class StockResponseAdminDto {
  productId: number;
  quantity: number;

  minStock: number;
  maxStock: number;
  criticalStock: number;
  allowNegativeStock: boolean;

  updatedAt: Date;
}