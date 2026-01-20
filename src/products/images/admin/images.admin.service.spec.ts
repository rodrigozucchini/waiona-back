import { Test, TestingModule } from '@nestjs/testing';
import { ImagesAdminService } from './images.admin.service';

describe('ImagesService', () => {
  let service: ImagesAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImagesAdminService],
    }).compile();

    service = module.get<ImagesAdminService>(ImagesAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
