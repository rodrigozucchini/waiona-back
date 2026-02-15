import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from '../entities/category.entity';
import { CategoryResponseClientDto } from './dto/category-response.client.dto';

function toResponseDto(category: CategoryEntity): CategoryResponseClientDto {
  return {
    id: category.id,
    name: category.name,
    description: category.description,
    parent: category.parent
      ? { id: category.parent.id, name: category.parent.name }
      : null,
    children:
      category.children
        ?.filter((child) => !child.isDeleted && child.isActive)
        .map((child) => ({
          id: child.id,
          name: child.name,
          description: child.description,
        })) ?? [],
    products:
      category.products
        ?.filter((product) => !product.isDeleted)
        .map((product) => ({
          id: product.id,
          sku: product.sku,
          name: product.name,
          description: product.description,
          type: product.type,
          basePrice: product.basePrice,
          measureUnit: product.measureUnit,
          measureValue: product.measureValue,
        })) ?? [],
  };
}

@Injectable()
export class CategoriesClientService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async findAll(): Promise<CategoryResponseClientDto[]> {
    const categories = await this.categoryRepository.find({
      where: { isDeleted: false, isActive: true },
      relations: ['parent'],
      order: { name: 'ASC' },
    });

    return categories.map((category) => ({
      ...toResponseDto(category),
      children: [],
      products: [],
    }));
  }

  async findOne(id: number): Promise<CategoryResponseClientDto> {
    const category = await this.categoryRepository.findOne({
      where: { id, isDeleted: false, isActive: true },
      relations: ['parent', 'children', 'products'],
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return toResponseDto(category);
  }
}
