import { ProductResponseAdminDto } from '../../../admin/dto/product-response.admin.dto';

export class ComboWithProductsResponseAdminDto {
  id: number;
  name: string;
  description?: string;
  products: ProductResponseAdminDto[];
}
