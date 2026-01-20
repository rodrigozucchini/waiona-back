import { Test, TestingModule } from '@nestjs/testing';
import { MarginsAdminController } from './margins.admin.controller';
import { MarginsAdminService } from './margins.admin.service';

describe('MarginsController', () => {
  let controller: MarginsAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarginsAdminController],
      providers: [MarginsAdminService],
    }).compile();

    controller = module.get<MarginsAdminController>(MarginsAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
