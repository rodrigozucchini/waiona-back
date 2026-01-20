import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageEntity } from './entities/image.entity';
import { ProductImageEntity } from './entities/product-image.entity';
import { ComboImageEntity } from './entities/combo-image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ImageEntity,
      ProductImageEntity,
      ComboImageEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class ImagesModule {}
