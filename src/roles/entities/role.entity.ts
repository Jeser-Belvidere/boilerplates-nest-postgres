import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  label: string;

  @ManyToMany((type) => User, (user) => user.id)
  users: User[];
}
