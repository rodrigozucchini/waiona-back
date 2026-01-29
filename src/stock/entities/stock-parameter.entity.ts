import { Entity, Column, OneToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity('stock_parameters')
@Index(['product'], { unique: true })
export class StockParameterEntity extends BaseEntity {
  @OneToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column({ type: 'int', default: 0 })
  minStock: number;

  @Column({ type: 'int', nullable: true })
  maxStock?: number;

  @Column({ type: 'int', default: 0 })
  criticalStock: number;

  @Column({ type: 'boolean', default: false })
  allowNegativeStock: boolean;
}
