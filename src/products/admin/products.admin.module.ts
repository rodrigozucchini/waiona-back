import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsAdminService } from './products.admin.service';
import { ProductsAdminController } from './products.admin.controller';
import { CombosAdminService } from './combos/combos.admin.service';
import { CombosAdminController } from './combos/combos.admin.controller';

// Entidades
import { ProductEntity } from './entities/product.entity';
import { ProductImageEntity } from './images/entities/product-image.entity';
import { ImageEntity } from './images/entities/image.entity'; // 👈 IMPORTANTE
import { ComboEntity } from './combos/entities/combo.entity';
import { ComboProductEntity } from './combos/entities/combo-product.entity';
import { MarginEntity } from 'src/pricing/margins/admin/entities/margin.entity';
import { TaxEntity } from 'src/pricing/taxes/admin/entities/tax.entity';
import { ImagesAdminModule } from './images/images.admin.module';
import { CombosAdminModule } from './combos/combos.admin.module';
import { TaxesModule } from 'src/pricing/taxes/admin/taxes.admin.module';
import { MarginsModule } from 'src/pricing/margins/admin/margins.admin.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]), // Solo product, imágenes y combos vienen de sus módulos
    ImagesAdminModule,
    CombosAdminModule,
    TaxesModule,
    MarginsModule,
  ],
  controllers: [ProductsAdminController],
  providers: [ProductsAdminService],
})
export class ProductsModule {}
