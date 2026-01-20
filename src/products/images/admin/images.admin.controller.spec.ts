import { Test, TestingModule } from '@nestjs/testing';
import { ImagesAdminController } from './images.admin.controller';

describe('ImagesController', () => {
  let controller: ImagesAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImagesAdminController],
    }).compile();

    controller = module.get<ImagesAdminController>(ImagesAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
