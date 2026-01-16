import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { MarginEntity } from 'src/pricing/margins/entities/margin.entity';
import { TaxEntity } from 'src/pricing/taxes/entities/tax.entity';
import { DiscountEntity } from 'src/pricing/discounts/entities/discount.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(MarginEntity)
    private readonly marginRepository: Repository<MarginEntity>,

    @InjectRepository(TaxEntity)
    private readonly taxRepository: Repository<TaxEntity>,

    @InjectRepository(DiscountEntity)
    private readonly discountRepository: Repository<DiscountEntity>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productRepository.create({
      sku: dto.sku,
      name: dto.name,
      description: dto.description,
      type: dto.type,
      basePrice: dto.basePrice,
    });

    if (dto.marginId) {
      product.margin = await this.marginRepository.findOneBy({
        id: dto.marginId,
        isDeleted: false,
      });
    }

    if (dto.taxIds?.length) {
      product.taxes = await this.taxRepository.find({
        where: { id: In(dto.taxIds), isDeleted: false },
      });
    }

    if (dto.discountIds?.length) {
      product.discounts = await this.discountRepository.find({
        where: { id: In(dto.discountIds), isDeleted: false },
      });
    }

    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find({
      where: { isDeleted: false },
      relations: [
        'images',
        'images.image',
        'margin',
        'taxes',
        'taxes.taxType',
        'discounts',
        'discounts.discountType',
      ],
    });
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id, isDeleted: false },
      relations: [
        'images',
        'images.image',
        'margin',
        'taxes',
        'taxes.taxType',
        'discounts',
        'discounts.discountType',
      ],
    });

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  async update(id: number, dto: UpdateProductDto) {
    const product = await this.findOne(id);

    Object.assign(product, dto);

    if (dto.marginId !== undefined) {
      product.margin = dto.marginId
        ? await this.marginRepository.findOneBy({
            id: dto.marginId,
            isDeleted: false,
          })
        : null;
    }

    if (dto.taxIds) {
      product.taxes = await this.taxRepository.find({
        where: { id: In(dto.taxIds), isDeleted: false },
      });
    }

    if (dto.discountIds) {
      product.discounts = await this.discountRepository.find({
        where: { id: In(dto.discountIds), isDeleted: false },
      });
    }

    return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    product.isDeleted = true;
    return this.productRepository.save(product);
  }
}
