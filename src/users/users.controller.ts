import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/getAll')
  index() {
    return this.usersService.getAll();
  }

  @Get('/:id')
  show(@Param('id') id: number) {
    return this.usersService.getById(Number(id));
  }

  @Post('/create')
  create(@Body() data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() data: UpdateUserDto) {
    return this.usersService.update(Number(id), data);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.usersService.removeById(Number(id));
  }
}
