import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ImageEntity } from './entities/image.entity';
import { ProductImageEntity } from './entities/product-image.entity';
import { ComboImageEntity } from './entities/combo-image.entity';

import { ImagesAdminService } from './images.admin.service';
import { ImagesAdminController } from './images.admin.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ImageEntity,
      ProductImageEntity,
      ComboImageEntity,
    ]),
  ],
  providers: [ImagesAdminService],
  controllers: [ImagesAdminController],
  exports: [ImagesAdminService],
})
export class ImagesAdminModule {}
