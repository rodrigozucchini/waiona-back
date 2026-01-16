import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ImagesService } from './images/images/images.service';
import { CombosController } from './combos/combos.controller';
import { CombosService } from './combos/combos.service';

@Module({
  controllers: [ProductsController, CombosController],
  providers: [ProductsService, ImagesService, CombosService],
})
export class ProductsModule {}
