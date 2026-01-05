import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

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
  create(@Body() data: any) {
    return this.usersService.create(data);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() data: any) {
    return this.usersService.update(Number(id), data);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.usersService.removeById(Number(id));
  }
}
