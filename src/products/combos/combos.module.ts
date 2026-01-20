import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ComboEntity } from './entities/combo.entity';
import { ComboProductEntity } from './entities/combo-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComboEntity, ComboProductEntity])],
  exports: [TypeOrmModule],
})
export class CombosModule {}
