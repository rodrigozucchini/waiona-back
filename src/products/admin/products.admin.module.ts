import { Module } from '@nestjs/common';

import { ProductsAdminService } from './products.admin.service';
import { ProductsAdminController } from './products.admin.controller';

import { ProductsModule } from '../products.module';
import { ImagesAdminModule } from '../images/admin/images.admin.module';
import { CombosAdminModule } from '../combos/admin/combos.admin.module';
import { TaxesModule } from 'src/pricing/taxes/admin/taxes.admin.module';
import { MarginsModule } from 'src/pricing/margins/admin/margins.admin.module';

@Module({
  imports: [
    ProductsModule,
    ImagesAdminModule,
    CombosAdminModule,
    TaxesModule,
    MarginsModule,
  ],
  controllers: [ProductsAdminController],
  providers: [ProductsAdminService],
})
export class ProductsAdminModule {}
