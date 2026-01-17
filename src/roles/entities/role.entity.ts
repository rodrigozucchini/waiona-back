import { BaseEntity } from "src/common/entities/base.entity";
import { PermissionEntity } from "src/permissions/entities/permission.entity";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";

@Entity('roles')
export class RoleEntity extends BaseEntity {

  @Column({ unique: true })
  name: string; // admin, manager, operator

  @ManyToMany(() => PermissionEntity)
  @JoinTable({
    name: 'role_permissions',
    joinColumn: { name: 'role_id' },
    inverseJoinColumn: { name: 'permission_id' },
  })
  permissions: PermissionEntity[];
}
