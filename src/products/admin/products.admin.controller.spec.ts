import { Test, TestingModule } from '@nestjs/testing';
import { ProductsAdminController } from './products.admin.controller';
import { ProductsAdminService } from './products.admin.service';

describe('ProductsController', () => {
  let controller: ProductsAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsAdminController],
      providers: [ProductsAdminService],
    }).compile();

    controller = module.get<ProductsAdminController>(ProductsAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
