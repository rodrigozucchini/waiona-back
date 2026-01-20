import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxesAdminService } from './taxes.admin.service';
import { TaxesAdminController } from './taxes.admin.controller';
import { TaxEntity } from './entities/tax.entity';
import { TaxTypeEntity } from '../../tax-types/admin/entities/tax-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaxEntity, TaxTypeEntity]), // asegurate de registrar todas las entidades que usás
  ],
  controllers: [TaxesAdminController],
  providers: [TaxesAdminService],
  exports: [TaxesAdminService, TypeOrmModule], // 👈 exportar para otros módulos
})
export class TaxesModule {}
