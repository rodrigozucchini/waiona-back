import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../../../common/entities/base.entity';
import { ComboProductEntity } from './combo-product.entity';

@Entity('combos')
export class ComboEntity extends BaseEntity {

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string; // nombre del combo

  @Column({ type: 'varchar', length: 500, nullable: true })
  description?: string; // descripción opcional del combo

  @OneToMany(() => ComboProductEntity, comboProduct => comboProduct.combo)
  products: ComboProductEntity[];
}
