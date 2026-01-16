import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ComboEntity } from './entities/combo.entity';
import { ComboProductEntity } from './entities/combo-product.entity';

import { CreateComboDto } from './dto/create-combo.dto';
import { UpdateComboDto } from './dto/update-combo.dto';

import { UpdateComboProductDto } from './dto/update-combo-product.dto';
import { AddProductToComboDto } from './dto/add-product-combo.dto';

@Injectable()
export class CombosService {
  constructor(
    @InjectRepository(ComboEntity)
    private readonly comboRepository: Repository<ComboEntity>,

    @InjectRepository(ComboProductEntity)
    private readonly comboProductRepository: Repository<ComboProductEntity>,
  ) {}

  // =========================
  // Combos CRUD
  // =========================

  async create(dto: CreateComboDto) {
    const combo = this.comboRepository.create(dto);
    return this.comboRepository.save(combo);
  }

  findAll() {
    return this.comboRepository.find({
      where: { isDeleted: false },
    });
  }

  async findOne(id: number) {
    const combo = await this.comboRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['products', 'products.product'],
    });

    if (!combo) {
      throw new NotFoundException('Combo not found');
    }

    return combo;
  }

  async update(id: number, dto: UpdateComboDto) {
    const combo = await this.findOne(id);
    Object.assign(combo, dto);
    return this.comboRepository.save(combo);
  }

  async remove(id: number) {
    const combo = await this.findOne(id);
    combo.isDeleted = true;
    return this.comboRepository.save(combo);
  }

  // =========================
  // Combo Products
  // =========================

  async addProductToCombo(dto: AddProductToComboDto) {
    const relation = this.comboProductRepository.create(dto);
    return this.comboProductRepository.save(relation);
  }

  async updateComboProduct(id: number, dto: UpdateComboProductDto) {
    const relation = await this.comboProductRepository.findOne({
      where: { id, isDeleted: false },
    });

    if (!relation) {
      throw new NotFoundException('Combo product not found');
    }

    Object.assign(relation, dto);
    return this.comboProductRepository.save(relation);
  }

  async removeComboProduct(id: number) {
    const relation = await this.comboProductRepository.findOne({
      where: { id, isDeleted: false },
    });

    if (!relation) {
      throw new NotFoundException('Combo product not found');
    }

    relation.isDeleted = true;
    return this.comboProductRepository.save(relation);
  }

  async getProductsByCombo(comboId: number) {
    return this.comboProductRepository.find({
      where: {
        comboId,
        isDeleted: false,
      },
      relations: ['product'],
    });
  }
}
