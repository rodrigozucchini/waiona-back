import { IsInt, Min } from 'class-validator';

export class CreateStockAdminDto {
  @IsInt()
  @Min(1)
  productId: number;

  @IsInt()
  @Min(0)
  quantity: number;
}
