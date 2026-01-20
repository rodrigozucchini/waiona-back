import { Test, TestingModule } from '@nestjs/testing';
import { CombosAdminService } from './combos.admin.service';

describe('CombosService', () => {
  let service: CombosAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CombosAdminService],
    }).compile();

    service = module.get<CombosAdminService>(CombosAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
