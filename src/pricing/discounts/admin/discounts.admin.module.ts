import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountsAdminService } from './discounts.admin.service';
import { DiscountsAdminController } from './discounts.admin.controller';
import { DiscountEntity } from './entities/discount.entity';
import { DiscountTypeEntity } from '../../discount-types/admin/entities/discount-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountEntity, DiscountTypeEntity])],
  controllers: [DiscountsAdminController],
  providers: [DiscountsAdminService],
})
export class DiscountsModule {}
