import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Jim', email: 'jim@example.com' },
    { id: 4, name: 'Jill', email: 'jill@example.com' }
  ];

  getAll() {
    return {
      data: this.users,
      message: 'Users fetched successfully',
      status: 200
    };
  }

  getById(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return {
      data: user,
      message: 'User fetched successfully',
      status: 200
    };
  }

  create(body: CreateUserDto) {
    const user = { id: body.id, name: body.name, email: body.email };
    this.users.push(user);
    return {
      data: this.users,
      message: 'User created successfully',
      status: 201
    };
  }
  update(id: number, body: UpdateUserDto) {
    const user = this.users.find((user) => user.id == id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.name = body.name;
    user.email = body.email;
    return {
      data: user,
      message: 'User updated successfully',
      status: 200
    };
  }

  removeById(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    this.users = this.users.filter((user) => user.id != id);
    return {
      message: 'User deleted successfully',
      status: 200
    };
  }
}
