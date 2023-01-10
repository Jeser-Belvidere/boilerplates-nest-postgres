import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @JoinTable()
  @ManyToMany(
    (type) => Role,
    (role) => role.id,
    // { cascade: true }, insert and creates new role if not exists
  )
  roles: Role[];

  @CreateDateColumn()
  created_at: string;
}
