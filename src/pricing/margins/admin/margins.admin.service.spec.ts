import { Test, TestingModule } from '@nestjs/testing';
import { MarginsAdminService } from './margins.admin.service';

describe('MarginsService', () => {
  let service: MarginsAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarginsAdminService],
    }).compile();

    service = module.get<MarginsAdminService>(MarginsAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
