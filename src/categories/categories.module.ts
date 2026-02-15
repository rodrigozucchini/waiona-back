import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryEntity } from './entities/category.entity';
import { CategoriesAdminController } from './admin/categories.admin.controller';
import { CategoriesAdminService } from './admin/categories.admin.service';
import { CategoriesClientController } from './client/categories.client.controller';
import { CategoriesClientService } from './client/categories.client.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoriesAdminController, CategoriesClientController],
  providers: [CategoriesAdminService, CategoriesClientService],
  exports: [
    TypeOrmModule, // opcional pero recomendado
  ],
})
export class CategoriesModule {}
