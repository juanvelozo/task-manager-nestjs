import { BaseEntity } from 'src/config/base.entity';
import { ROLES } from 'src/constants/roles';
import { IUser } from 'src/interface/user.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { UsersProjectsEntity } from './usersProjects.entity';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  user_name: string;
  @Column()
  password: string;
  @Column({ type: 'enum', enum: ROLES })
  role: ROLES;
  @OneToMany(() => UsersProjectsEntity, (usersProjects) => usersProjects.user)
  projectIncludes: UsersProjectsEntity[];
}
