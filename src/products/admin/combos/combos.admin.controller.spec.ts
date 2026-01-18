import { Test, TestingModule } from '@nestjs/testing';
import { CombosAdminController } from './combos.admin.controller';

describe('CombosController', () => {
  let controller: CombosAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CombosAdminController],
    }).compile();

    controller = module.get<CombosAdminController>(CombosAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
