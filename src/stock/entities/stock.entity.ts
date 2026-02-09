import { Entity, Column, OneToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity('stocks')
@Index(['product'], { unique: true })
export class StockEntity extends BaseEntity {
  @OneToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @Column({ type: 'int', default: 0 })
  quantity: number;
}
