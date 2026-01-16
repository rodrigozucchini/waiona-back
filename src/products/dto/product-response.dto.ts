import { ProductType } from "src/common/enums/product-type.enum";
import { DiscountResponseDto } from "src/pricing/discounts/dto/discount-response.dto";
import { MarginResponseDto } from "src/pricing/margins/dto/margin-response.dto";
import { TaxResponseDto } from "src/pricing/taxes/dto/tax-response";
import { ProductImageResponseDto } from "../images/dto/product-image-response.dto";


export class ProductResponseDto {
  id: number;
  sku: string;
  name: string;
  description?: string;
  type: ProductType;
  basePrice: number;

  margin?: MarginResponseDto;
  taxes: TaxResponseDto[];
  discounts: DiscountResponseDto[];
  images: ProductImageResponseDto[];

  createdAt: Date;
  updatedAt: Date;
}
