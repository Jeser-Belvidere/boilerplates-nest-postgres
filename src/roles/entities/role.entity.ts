import { Column, Entity, Index, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
  @Index()
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  @ManyToMany((type) => User, (user) => user.id)
  users: User[];
}
