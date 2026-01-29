export class StockParameterResponseAdminDto {
    id: number;
    productId: number;
  
    minStock: number;
    maxStock?: number;
    criticalStock: number;
    allowNegativeStock: boolean;
  
    createdAt: Date;
    updatedAt: Date;
  }