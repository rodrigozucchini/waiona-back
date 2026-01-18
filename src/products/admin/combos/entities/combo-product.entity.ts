import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../../../../common/entities/base.entity';
import { ProductEntity } from '../../entities/product.entity';
import { ComboEntity } from './combo.entity';

@Entity('combo_products')
@Index(['comboId', 'productId'], { unique: true }) // evita duplicados
export class ComboProductEntity extends BaseEntity {

  @Column({ type: 'int', nullable: false })
  comboId: number;

  @Column({ type: 'int', nullable: false })
  productId: number;

  @ManyToOne(() => ComboEntity, combo => combo.products, { nullable: false })
  @JoinColumn({ name: 'comboId' })
  combo: ComboEntity;

  @ManyToOne(() => ProductEntity, product => product.combos, { nullable: false })
  @JoinColumn({ name: 'productId' })
  product: ProductEntity;

  @Column({ type: 'int', default: 1, nullable: false })
  quantity: number; // cantidad de productos en el combo
}
