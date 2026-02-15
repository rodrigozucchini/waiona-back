import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryAdminDto } from './dto/create-category.admin.dto';
import { UpdateCategoryAdminDto } from './dto/update-category.admin.dto';
import { CategoryResponseAdminDto } from './dto/category-response.admin.dto';

function toResponseDto(category: CategoryEntity): CategoryResponseAdminDto {
  return {
    id: category.id,
    name: category.name,
    description: category.description,
    isActive: category.isActive,
    parent: category.parent
      ? { id: category.parent.id, name: category.parent.name }
      : null,
    createdAt: category.createdAt,
    updatedAt: category.updatedAt,
  };
}

@Injectable()
export class CategoriesAdminService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async create(dto: CreateCategoryAdminDto): Promise<CategoryResponseAdminDto> {
    const category = this.categoryRepository.create({
      name: dto.name,
      description: dto.description,
      isActive: dto.isActive ?? true,
    });

    if (dto.parentId) {
      category.parent = await this.resolveParent(dto.parentId);
    }

    const saved = await this.categoryRepository.save(category);
    return this.findOne(saved.id);
  }

  async findAll(): Promise<CategoryResponseAdminDto[]> {
    const list = await this.categoryRepository.find({
      where: { isDeleted: false },
      relations: ['parent'],
      order: { name: 'ASC' },
    });

    return list.map(toResponseDto);
  }

  async findOne(id: number): Promise<CategoryResponseAdminDto> {
    const category = await this.findEntityOrFail(id);
    return toResponseDto(category);
  }

  async update(
    id: number,
    dto: UpdateCategoryAdminDto,
  ): Promise<CategoryResponseAdminDto> {
    const category = await this.findEntityOrFail(id);

    if (dto.name !== undefined) {
      category.name = dto.name;
    }

    if (dto.description !== undefined) {
      category.description = dto.description;
    }

    if (dto.isActive !== undefined) {
      category.isActive = dto.isActive;
    }

    if (dto.parentId !== undefined) {
      if (dto.parentId === null) {
        category.parent = null;
      } else {
        if (dto.parentId === id) {
          throw new BadRequestException('Category cannot be its own parent');
        }

        category.parent = await this.resolveParent(dto.parentId);
      }
    }

    const saved = await this.categoryRepository.save(category);
    return this.findOne(saved.id);
  }

  async remove(id: number): Promise<CategoryResponseAdminDto> {
    const category = await this.findEntityOrFail(id);

    category.isDeleted = true;

    const saved = await this.categoryRepository.save(category);
    return toResponseDto(saved);
  }

  private async findEntityOrFail(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['parent'],
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  private async resolveParent(parentId: number): Promise<CategoryEntity> {
    const parent = await this.categoryRepository.findOne({
      where: { id: parentId, isDeleted: false },
    });

    if (!parent) {
      throw new NotFoundException('Parent category not found');
    }

    return parent;
  }
}
