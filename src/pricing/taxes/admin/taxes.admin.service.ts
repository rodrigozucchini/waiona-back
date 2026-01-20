import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaxEntity } from './entities/tax.entity';
import { CreateTaxAdminDto } from './dto/create-tax.admin.dto';
import { UpdateTaxAdminDto } from './dto/update-tax.admin.dto';
import { TaxTypeEntity } from '../../tax-types/admin/entities/tax-type.entity';

@Injectable()
export class TaxesAdminService {
  constructor(
    @InjectRepository(TaxEntity)
    private readonly taxRepository: Repository<TaxEntity>,

    @InjectRepository(TaxTypeEntity)
    private readonly taxTypeRepository: Repository<TaxTypeEntity>,
  ) {}

  // Crear un impuesto
  async create(dto: CreateTaxAdminDto) {
    // Validar existencia del taxType
    const taxType = await this.taxTypeRepository.findOne({
      where: { id: dto.taxTypeId, isDeleted: false },
    });
    if (!taxType) throw new NotFoundException('Tax type not found');

    const tax = this.taxRepository.create({
      taxType,
      value: dto.value,
      isPercentage: dto.isPercentage,
    });

    return this.taxRepository.save(tax);
  }

  // Listar todos los impuestos activos
  findAll() {
    return this.taxRepository.find({
      relations: ['taxType'],
      where: { isDeleted: false },
    });
  }

  // Buscar uno por ID
  async findOne(id: number) {
    const tax = await this.taxRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['taxType'],
    });

    if (!tax) throw new NotFoundException('Tax not found');

    return tax;
  }

  // Actualizar impuesto (PUT)
  async update(id: number, dto: UpdateTaxAdminDto) {
    const tax = await this.findOne(id);

    // Validar y asignar taxType
    const taxType = await this.taxTypeRepository.findOne({
      where: { id: dto.taxTypeId, isDeleted: false },
    });
    if (!taxType) throw new NotFoundException('Tax type not found');

    // Asignación explícita de campos
    tax.taxType = taxType;
    tax.value = dto.value;
    tax.isPercentage = dto.isPercentage;

    return this.taxRepository.save(tax);
  }

  // Soft delete
  async remove(id: number) {
    const tax = await this.findOne(id);
    tax.isDeleted = true;
    return this.taxRepository.save(tax);
  }
}
