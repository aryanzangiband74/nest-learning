import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';
import { CustomPipe } from 'src/pipes/custom/custom.pipe';
import { MobilePipe } from 'src/pipes/validate/mobile/mobile.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/getAll')
  index() {
    return this.usersService.getAll();
  }

  @Get('/:id')
  show(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getById(Number(id));
  }

  //pipes
  @Post('/create')
  create(@Body(new MobilePipe()) data: CreateUserDto) {
    return this.usersService.create(data);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body(new ValidationPipe()) data: UpdateUserDto) {
    return this.usersService.update(Number(id), data);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.usersService.removeById(Number(id));
  }
}
