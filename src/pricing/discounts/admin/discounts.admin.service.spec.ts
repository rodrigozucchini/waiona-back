import { Test, TestingModule } from '@nestjs/testing';
import { DiscountsAdminService } from './discounts.admin.service';

describe('DiscountsService', () => {
  let service: DiscountsAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountsAdminService],
    }).compile();

    service = module.get<DiscountsAdminService>(DiscountsAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
