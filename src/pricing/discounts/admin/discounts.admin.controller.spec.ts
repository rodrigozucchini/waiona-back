import { Test, TestingModule } from '@nestjs/testing';
import { DiscountsAdminController } from './discounts.admin.controller';
import { DiscountsAdminService } from './discounts.admin.service';

describe('DiscountsController', () => {
  let controller: DiscountsAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountsAdminController],
      providers: [DiscountsAdminService],
    }).compile();

    controller = module.get<DiscountsAdminController>(DiscountsAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
