import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../../../../common/entities/base.entity';
import { DiscountTypeEntity } from '../../../discount-types/admin/entities/discount-type.entity';

@Entity('discounts')
@Index(['discountType'])
export class DiscountEntity extends BaseEntity {
  // Tipo de descuento (PROMO, CUPON, BANCO, etc)
  @ManyToOne(() => DiscountTypeEntity, { nullable: false })
  @JoinColumn({ name: 'discount_type_id' })
  discountType: DiscountTypeEntity;

  // Valor del descuento: 10 (%) o 500 ($)
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  value: number;

  // true = porcentaje, false = monto fijo
  @Column({
    type: 'boolean',
    nullable: false,
  })
  isPercentage: boolean;
}
