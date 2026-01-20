import { Test, TestingModule } from '@nestjs/testing';
import { TaxesAdminService } from './taxes.admin.service';

describe('TaxesService', () => {
  let service: TaxesAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxesAdminService],
    }).compile();

    service = module.get<TaxesAdminService>(TaxesAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
