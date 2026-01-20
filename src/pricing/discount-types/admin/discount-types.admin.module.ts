import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscountTypeEntity } from './entities/discount-type.entity';
import { DiscountTypesAdminService } from './discount-types.admin.service';
import { DiscountTypesAdminController } from './discount-types.admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DiscountTypeEntity])],
  controllers: [DiscountTypesAdminController],
  providers: [DiscountTypesAdminService],
  exports: [DiscountTypesAdminService],
})
export class DiscountTypesModule {}
