import { Module } from '@nestjs/common';

import { StockModule } from '../stock.module';
import { ProductsModule } from '../../products/products.module';

import { StockAdminService } from './stock.admin.service';
import {
  StockAdminController,
  StockParametersAdminController,
  StockMovementsAdminController,
  StockLossesAdminController,
} from './stock.admin.controller';

@Module({
  imports: [StockModule, ProductsModule],
  controllers: [
    StockAdminController,
    StockParametersAdminController,
    StockMovementsAdminController,
    StockLossesAdminController,
  ],
  providers: [StockAdminService],
})
export class StockAdminModule {}
