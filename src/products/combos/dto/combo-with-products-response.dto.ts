import { ProductResponseDto } from "src/products/dto/product-response.dto";


export class ComboWithProductsResponseDto {
  id: number;
  name: string;
  description?: string;
  products: ProductResponseDto[];
}
