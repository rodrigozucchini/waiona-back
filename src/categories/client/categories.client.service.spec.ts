import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CategoriesClientService } from './categories.client.service';
import { CategoryEntity } from '../entities/category.entity';

describe('CategoriesClientService', () => {
  let service: CategoriesClientService;
  let categoryRepository: {
    find: jest.Mock;
    findOne: jest.Mock;
  };

  beforeEach(async () => {
    categoryRepository = {
      find: jest.fn(),
      findOne: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesClientService,
        {
          provide: getRepositoryToken(CategoryEntity),
          useValue: categoryRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesClientService>(CategoriesClientService);
  });

  it('should include children and products on findOne', async () => {
    categoryRepository.findOne.mockResolvedValue({
      id: 1,
      name: 'Main',
      description: 'Root',
      isDeleted: false,
      isActive: true,
      parent: null,
      children: [
        {
          id: 2,
          name: 'Child A',
          description: null,
          isDeleted: false,
          isActive: true,
        },
        {
          id: 3,
          name: 'Child B',
          description: null,
          isDeleted: true,
          isActive: true,
        },
      ],
      products: [
        {
          id: 10,
          sku: 'SKU-1',
          name: 'Product 1',
          description: 'Desc',
          type: 'simple',
          basePrice: 12.5,
          measureUnit: 'unit',
          measureValue: 1,
          isDeleted: false,
        },
        {
          id: 11,
          sku: 'SKU-2',
          name: 'Deleted Product',
          type: 'simple',
          basePrice: 20,
          isDeleted: true,
        },
      ],
    });

    const result = await service.findOne(1);

    expect(result.children).toHaveLength(1);
    expect(result.products).toHaveLength(1);
    expect(result.products[0].id).toBe(10);
  });

  it('should throw when category is not found', async () => {
    categoryRepository.findOne.mockResolvedValue(null);

    await expect(service.findOne(999)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
