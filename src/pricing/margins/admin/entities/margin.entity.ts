import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../../../../common/entities/base.entity';

@Entity('margins')
@Index(['value'])
export class MarginEntity extends BaseEntity {
  // margen en porcentaje (ej: 30 = 30%)
  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: false,
  })
  value: number;
}
