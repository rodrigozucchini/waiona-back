import { Module } from '@nestjs/common';
import { TaxTypesAdminController } from './tax-types.admin.controller';
import { TaxTypesAdminService } from './tax-types.admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxTypeEntity } from './entities/tax-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaxTypeEntity]), // 👈 REGISTRA EL REPO
  ],
  controllers: [TaxTypesAdminController],
  providers: [TaxTypesAdminService],
})
export class TaxTypesModule {}
