import { ProductResponseAdminDto } from "src/products/admin/dto/product-response.admin.dto";


export class ComboWithProductsResponseAdminDto {
  id: number;
  name: string;
  description?: string;
  products: ProductResponseAdminDto[];
}
