import { Test, TestingModule } from '@nestjs/testing';

import { CategoriesClientController } from './categories.client.controller';
import { CategoriesClientService } from './categories.client.service';

describe('CategoriesClientController', () => {
  let controller: CategoriesClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesClientController],
      providers: [
        {
          provide: CategoriesClientService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CategoriesClientController>(
      CategoriesClientController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
