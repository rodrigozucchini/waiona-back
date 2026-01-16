import { ImageResponseDto } from './image-response.dto';

export class ComboImageResponseDto {
  id: number;
  comboId: number;
  image: ImageResponseDto;
}
