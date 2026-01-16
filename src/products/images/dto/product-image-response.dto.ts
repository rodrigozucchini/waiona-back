import { ImageResponseDto } from './image-response.dto';

export class ProductImageResponseDto {
  id: number;
  productId: number;
  image: ImageResponseDto;
}
