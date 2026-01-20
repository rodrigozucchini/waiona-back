import { Test, TestingModule } from '@nestjs/testing';
import { TaxTypesAdminController } from './tax-types.admin.controller';

describe('TaxTypesController', () => {
  let controller: TaxTypesAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxTypesAdminController],
    }).compile();

    controller = module.get<TaxTypesAdminController>(TaxTypesAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
