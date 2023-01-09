import { IsString, IsArray } from 'class-validator';
import { Role } from 'src/roles/entities/role.entity';
export class CreateUserDto {
  @IsString()
  readonly firstname: string;
  @IsString()
  readonly lastname: string;
  @IsArray()
  readonly roles: Role[];
}
