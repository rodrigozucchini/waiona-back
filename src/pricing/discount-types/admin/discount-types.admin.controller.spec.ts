import { Test, TestingModule } from '@nestjs/testing';
import { DiscountTypesAdminController } from './discount-types.admin.controller';

describe('DiscountTypesController', () => {
  let controller: DiscountTypesAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountTypesAdminController],
    }).compile();

    controller = module.get<DiscountTypesAdminController>(
      DiscountTypesAdminController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
