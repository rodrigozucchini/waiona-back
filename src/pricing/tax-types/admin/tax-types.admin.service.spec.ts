import { Test, TestingModule } from '@nestjs/testing';
import { TaxTypesAdminService } from './tax-types.admin.service';

describe('TaxTypesService', () => {
  let service: TaxTypesAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaxTypesAdminService],
    }).compile();

    service = module.get<TaxTypesAdminService>(TaxTypesAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
