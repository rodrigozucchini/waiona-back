import { Test, TestingModule } from '@nestjs/testing';

import { CategoriesAdminController } from './categories.admin.controller';
import { CategoriesAdminService } from './categories.admin.service';

describe('CategoriesAdminController', () => {
  let controller: CategoriesAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesAdminController],
      providers: [
        {
          provide: CategoriesAdminService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CategoriesAdminController>(
      CategoriesAdminController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
