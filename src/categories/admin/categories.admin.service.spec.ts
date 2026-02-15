import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CategoriesAdminService } from './categories.admin.service';
import { CategoryEntity } from '../entities/category.entity';

describe('CategoriesAdminService', () => {
  let service: CategoriesAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesAdminService,
        {
          provide: getRepositoryToken(CategoryEntity),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CategoriesAdminService>(CategoriesAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
