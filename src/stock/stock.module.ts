import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StockEntity } from './entities/stock.entity';
import { StockParameterEntity } from './entities/stock-parameter.entity';
import { StockMovementEntity } from './entities/stock-movement.entity';
import { StockLossEntity } from './entities/stock-loss.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StockEntity,
      StockParameterEntity,
      StockMovementEntity,
      StockLossEntity,
    ]),
  ],
  exports: [TypeOrmModule],
})
export class StockModule {}
