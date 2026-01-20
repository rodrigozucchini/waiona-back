import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComboEntity } from '../entities/combo.entity';
import { ComboProductEntity } from '../entities/combo-product.entity';

import { CombosAdminService } from './combos.admin.service';
import { CombosAdminController } from './combos.admin.controller';

// 👇 IMPORTAR EL MÓDULO DE IMÁGENES
import { ImagesAdminModule } from '../../images/admin/images.admin.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ComboEntity,
      ComboProductEntity,
      // 👇 Ya no hace falta poner ComboImageEntity directamente
      // porque viene desde ImagesAdminModule
    ]),
    ImagesAdminModule,
  ],
  providers: [CombosAdminService],
  controllers: [CombosAdminController],
  exports: [CombosAdminService],
})
export class CombosAdminModule {}
