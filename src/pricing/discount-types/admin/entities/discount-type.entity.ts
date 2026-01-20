import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../../common/entities/base.entity';

@Entity('discount_types')
@Index(['code'], { unique: true })
export class DiscountTypeEntity extends BaseEntity {
  // Código interno: PROMO, CUPON, BANCO, BLACK_FRIDAY
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  code: string;

  // Nombre visible: Promoción, Cupón, Descuento Bancario
  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;
}
