import { User } from '../entities/user.entity';

export class ResponseUserDTO {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;

  constructor(user: Partial<User>) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.isActive = user.isActive;
  }
}
