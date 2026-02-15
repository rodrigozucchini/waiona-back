import { MeasureUnit } from '../../../common/enums/measure-unit.enum';
import { ProductType } from '../../../common/enums/product-type.enum';

class CategoryChildResponseClientDto {
  id: number;
  name: string;
  description?: string | null;
}

class CategoryProductResponseClientDto {
  id: number;
  sku: string;
  name: string;
  description?: string;
  type: ProductType;
  basePrice: number;
  measureUnit?: MeasureUnit;
  measureValue?: number;
}

export class CategoryResponseClientDto {
  id: number;
  name: string;
  description?: string | null;

  parent?: {
    id: number;
    name: string;
  } | null;

  children: CategoryChildResponseClientDto[];
  products: CategoryProductResponseClientDto[];
}
