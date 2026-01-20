import { Test, TestingModule } from '@nestjs/testing';
import { DiscountTypesAdminService } from './discount-types.admin.service';

describe('DiscountTypesService', () => {
  let service: DiscountTypesAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountTypesAdminService],
    }).compile();

    service = module.get<DiscountTypesAdminService>(DiscountTypesAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
