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
    });

    if (dto.parentId) {
      const parent = await this.categoryRepository.findOne({
        where: { id: dto.parentId, isDeleted: false },
      });

      if (!parent) {
        throw new NotFoundException('Parent category not found');
      }

      category.parent = parent;
    }

    const saved = await this.categoryRepository.save(category);
    return toResponseDto(saved);
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
    const category = await this.categoryRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['parent'],
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return toResponseDto(category);
  }

  async update(
    id: number,
    dto: UpdateCategoryAdminDto,
  ): Promise<CategoryResponseAdminDto> {
    const category = await this.findOne(id);

    // 🔹 actualizar nombre
    if (dto.name !== undefined) {
      category.name = dto.name;
    }

    // 🔹 actualizar padre (clave del problema)
    if (dto.parentId !== undefined) {
      // categoría raíz
      if (dto.parentId === null) {
        category.parent = null;
      } else {
        // no puede ser su propio padre
        if (dto.parentId === id) {
          throw new BadRequestException('Category cannot be its own parent');
        }

        const parent = await this.categoryRepository.findOne({
          where: { id: dto.parentId, isDeleted: false },
        });

        if (!parent) {
          throw new NotFoundException('Parent category not found');
        }

        category.parent = parent;
      }
    }

    const saved = await this.categoryRepository.save(category);
    return toResponseDto(saved);
  }

  async remove(id: number): Promise<CategoryResponseAdminDto> {
    const category = await this.categoryRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['parent'],
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    category.isDeleted = true;
    const saved = await this.categoryRepository.save(category);
    return toResponseDto(saved);
  }
}
