import { Test, TestingModule } from '@nestjs/testing';
import { TaxesAdminController } from './taxes.admin.controller';
import { TaxesAdminService } from './taxes.admin.service';

describe('TaxesController', () => {
  let controller: TaxesAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxesAdminController],
      providers: [TaxesAdminService],
    }).compile();

    controller = module.get<TaxesAdminController>(TaxesAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
