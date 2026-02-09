import { IsInt, Min } from 'class-validator';

export class UpdateStockAdminDto {
  @IsInt()
  @Min(0)
  quantity: number;
}
