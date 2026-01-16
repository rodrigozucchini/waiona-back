import { BaseEntity } from 'src/common/entities/base.entity';
import { ProductType } from 'src/common/enums/product-type.enum';
import { ComboProductEntity } from '../combos/entities/combo-product.entity';
import { ProductImageEntity } from '../images/entities/product-image.entity';
import { MarginEntity } from 'src/pricing/margins/entities/margin.entity';
import { TaxEntity } from 'src/pricing/taxes/entities/tax.entity';
import { DiscountEntity } from 'src/pricing/discounts/entities/discount.entity';
import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from 'typeorm';


@Entity('products')
export class ProductEntity extends BaseEntity {

  @Column({ unique: true })
  sku: string;
    
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({
    type: 'enum',
    enum: ProductType,
  })
  type: ProductType;

  @Column('decimal', { precision: 10, scale: 2 })
  basePrice: number;

  // ---------- Relaciones ----------

  // Combos
  @OneToMany(() => ComboProductEntity, comboProduct => comboProduct.product)
  combos: ComboProductEntity[];

  // Imágenes
  @OneToMany(() => ProductImageEntity, productImage => productImage.product)
  images: ProductImageEntity[];

  // Margen
  @ManyToOne(() => MarginEntity, { nullable: true })
  @JoinColumn({ name: 'margin_id' })
  margin: MarginEntity | null;

  // Impuestos
  @ManyToMany(() => TaxEntity)
  @JoinTable({
    name: 'product_taxes',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'tax_id' },
  })
  taxes: TaxEntity[];

  // Descuentos
  @ManyToMany(() => DiscountEntity)
  @JoinTable({
    name: 'product_discounts',
    joinColumn: { name: 'product_id' },
    inverseJoinColumn: { name: 'discount_id' },
  })
  discounts: DiscountEntity[];
}
