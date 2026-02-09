import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductEntity } from '../../products/entities/product.entity';
import { StockEntity } from '../entities/stock.entity';
import { StockParameterEntity } from '../entities/stock-parameter.entity';
import { StockMovementEntity } from '../entities/stock-movement.entity';
import { StockLossEntity } from '../entities/stock-loss.entity';

import { CreateStockAdminDto } from '../dto/create-stock.admin.dto';
import { CreateStockParameterAdminDto } from '../dto/create-stock-parameter-admin.dto';
import { UpdateStockParameterAdminDto } from '../dto/update-stock-parameter.admin.dto';
import { CreateStockMovementAdminDto } from '../dto/create-stock-movement-admin.dto';
import { CreateStockLossAdminDto } from '../dto/create-stock-loss-admin.dto';

import { StockResponseAdminDto } from '../dto/stock-response.admin.dto';
import { StockParameterResponseAdminDto } from '../dto/stock-parameter-response.admin.dto';
import { StockMovementResponseAdminDto } from '../dto/stock-movement-response.admin.dto';
import { StockLossResponseAdminDto } from '../dto/stock-loss-response-admin.dto';

function toStockResponse(
  stock: StockEntity,
  params?: StockParameterEntity | null,
): StockResponseAdminDto {
  return {
    productId: stock.product.id,
    quantity: stock.quantity,
    minStock: params?.minStock ?? 0,
    maxStock: params?.maxStock ?? 0,
    criticalStock: params?.criticalStock ?? 0,
    allowNegativeStock: params?.allowNegativeStock ?? false,
    updatedAt: stock.updatedAt,
  };
}

function toStockParameterResponse(
  p: StockParameterEntity,
): StockParameterResponseAdminDto {
  return {
    id: p.id,
    productId: p.product.id,
    minStock: p.minStock,
    maxStock: p.maxStock,
    criticalStock: p.criticalStock,
    allowNegativeStock: p.allowNegativeStock,
    createdAt: p.createdAt,
    updatedAt: p.updatedAt,
  };
}

function toStockMovementResponse(
  m: StockMovementEntity,
): StockMovementResponseAdminDto {
  return {
    id: m.id,
    productId: m.product.id,
    quantity: m.quantity,
    type: m.type,
    note: m.note,
    createdAt: m.createdAt,
  };
}

function toStockLossResponse(l: StockLossEntity): StockLossResponseAdminDto {
  return {
    id: l.id,
    productId: l.product.id,
    quantity: l.quantity,
    reason: l.reason,
    description: l.description,
    createdAt: l.createdAt,
  };
}

@Injectable()
export class StockAdminService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
    @InjectRepository(StockEntity)
    private readonly stockRepository: Repository<StockEntity>,
    @InjectRepository(StockParameterEntity)
    private readonly stockParameterRepository: Repository<StockParameterEntity>,
    @InjectRepository(StockMovementEntity)
    private readonly stockMovementRepository: Repository<StockMovementEntity>,
    @InjectRepository(StockLossEntity)
    private readonly stockLossRepository: Repository<StockLossEntity>,
  ) {}

  private async getProductOrFail(productId: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({
      where: { id: productId, isDeleted: false },
    });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // ==================== Stock ====================

  async createStock(dto: CreateStockAdminDto): Promise<StockResponseAdminDto> {
    const product = await this.getProductOrFail(dto.productId);
    const existing = await this.stockRepository.findOne({
      where: { product: { id: product.id }, isDeleted: false },
      relations: ['product'],
    });
    if (existing) {
      throw new BadRequestException('Stock already exists for this product');
    }
    const stock = this.stockRepository.create({
      product,
      quantity: dto.quantity,
    });
    const saved = await this.stockRepository.save(stock);
    const params = await this.stockParameterRepository.findOne({
      where: { product: { id: product.id }, isDeleted: false },
    });
    return toStockResponse(saved, params);
  }

  async findAllStocks(): Promise<StockResponseAdminDto[]> {
    const list = await this.stockRepository.find({
      where: { isDeleted: false },
      relations: ['product'],
      order: { id: 'ASC' },
    });
    const paramList = await this.stockParameterRepository.find({
      where: { isDeleted: false },
      relations: ['product'],
    });
    const paramByProductId = new Map(paramList.map((p) => [p.product.id, p]));
    return list.map((s) =>
      toStockResponse(s, paramByProductId.get(s.product.id)),
    );
  }

  async findOneStock(id: number): Promise<StockResponseAdminDto> {
    const stock = await this.stockRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['product'],
    });
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }
    const params = await this.stockParameterRepository.findOne({
      where: { product: { id: stock.product.id }, isDeleted: false },
    });
    return toStockResponse(stock, params);
  }

  async updateStockQuantity(
    id: number,
    quantity: number,
  ): Promise<StockResponseAdminDto> {
    const stock = await this.stockRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['product'],
    });
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }
    stock.quantity = quantity;
    const saved = await this.stockRepository.save(stock);
    const params = await this.stockParameterRepository.findOne({
      where: { product: { id: stock.product.id }, isDeleted: false },
    });
    return toStockResponse(saved, params);
  }

  async removeStock(id: number): Promise<void> {
    const stock = await this.stockRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!stock) {
      throw new NotFoundException('Stock not found');
    }
    stock.isDeleted = true;
    await this.stockRepository.save(stock);
  }

  // ==================== Stock parameters ====================

  async createStockParameter(
    dto: CreateStockParameterAdminDto,
  ): Promise<StockParameterResponseAdminDto> {
    const product = await this.getProductOrFail(dto.productId);
    const existing = await this.stockParameterRepository.findOne({
      where: { product: { id: product.id }, isDeleted: false },
    });
    if (existing) {
      throw new BadRequestException(
        'Stock parameters already exist for this product',
      );
    }
    const params = this.stockParameterRepository.create({
      product,
      minStock: dto.minStock,
      maxStock: dto.maxStock,
      criticalStock: dto.criticalStock,
      allowNegativeStock: dto.allowNegativeStock,
    });
    const saved = await this.stockParameterRepository.save(params);
    return toStockParameterResponse(saved);
  }

  async findAllStockParameters(): Promise<StockParameterResponseAdminDto[]> {
    const list = await this.stockParameterRepository.find({
      where: { isDeleted: false },
      relations: ['product'],
      order: { id: 'ASC' },
    });
    return list.map(toStockParameterResponse);
  }

  async findOneStockParameter(
    id: number,
  ): Promise<StockParameterResponseAdminDto> {
    const params = await this.stockParameterRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['product'],
    });
    if (!params) {
      throw new NotFoundException('Stock parameter not found');
    }
    return toStockParameterResponse(params);
  }

  async updateStockParameter(
    id: number,
    dto: UpdateStockParameterAdminDto,
  ): Promise<StockParameterResponseAdminDto> {
    const params = await this.stockParameterRepository.findOne({
      where: { id, isDeleted: false },
      relations: ['product'],
    });
    if (!params) {
      throw new NotFoundException('Stock parameter not found');
    }
    if (dto.minStock !== undefined) params.minStock = dto.minStock;
    if (dto.maxStock !== undefined) params.maxStock = dto.maxStock;
    if (dto.criticalStock !== undefined)
      params.criticalStock = dto.criticalStock;
    if (dto.allowNegativeStock !== undefined)
      params.allowNegativeStock = dto.allowNegativeStock;
    const saved = await this.stockParameterRepository.save(params);
    return toStockParameterResponse(saved);
  }

  async removeStockParameter(id: number): Promise<void> {
    const params = await this.stockParameterRepository.findOne({
      where: { id, isDeleted: false },
    });
    if (!params) {
      throw new NotFoundException('Stock parameter not found');
    }
    params.isDeleted = true;
    await this.stockParameterRepository.save(params);
  }

  // ==================== Stock movements ====================

  async createStockMovement(
    dto: CreateStockMovementAdminDto,
  ): Promise<StockMovementResponseAdminDto> {
    const product = await this.getProductOrFail(dto.productId);
    const movement = this.stockMovementRepository.create({
      product,
      quantity: dto.quantity,
      type: dto.type,
      note: dto.note,
    });
    const saved = await this.stockMovementRepository.save(movement);
    return toStockMovementResponse(saved);
  }

  async findAllStockMovements(): Promise<StockMovementResponseAdminDto[]> {
    const list = await this.stockMovementRepository.find({
      where: { isDeleted: false },
      relations: ['product'],
      order: { createdAt: 'DESC' },
    });
    return list.map(toStockMovementResponse);
  }

  // ==================== Stock losses ====================

  async createStockLoss(
    dto: CreateStockLossAdminDto,
  ): Promise<StockLossResponseAdminDto> {
    const product = await this.getProductOrFail(dto.productId);
    const loss = this.stockLossRepository.create({
      product,
      quantity: dto.quantity,
      reason: dto.reason,
      description: dto.description,
    });
    const saved = await this.stockLossRepository.save(loss);
    return toStockLossResponse(saved);
  }

  async findAllStockLosses(): Promise<StockLossResponseAdminDto[]> {
    const list = await this.stockLossRepository.find({
      where: { isDeleted: false },
      relations: ['product'],
      order: { createdAt: 'DESC' },
    });
    return list.map(toStockLossResponse);
  }
}
