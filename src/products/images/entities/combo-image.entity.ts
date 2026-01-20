import { Entity, Column, ManyToOne, JoinColumn, Index } from 'typeorm';
import { BaseEntity } from '../../../common/entities/base.entity';
import { ComboEntity } from '../../combos/entities/combo.entity';
import { ImageEntity } from './image.entity';

@Entity('combo_images')
@Index(['comboId', 'imageId'], { unique: true }) // evita duplicados
export class ComboImageEntity extends BaseEntity {
  @Column({ type: 'int', nullable: false })
  comboId: number;

  @Column({ type: 'int', nullable: false })
  imageId: number;

  @ManyToOne(() => ComboEntity, { nullable: false })
  @JoinColumn({ name: 'comboId' })
  combo: ComboEntity;

  @ManyToOne(() => ImageEntity, { nullable: false })
  @JoinColumn({ name: 'imageId' })
  image: ImageEntity;
}
