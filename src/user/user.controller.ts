import { UserService } from './user.service';
import {
  Get,
  Controller,
  Param,
  Post,
  Patch,
  Body,
  ParseIntPipe,
  Delete,
  Query,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './dto/post-user';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  get() {
    return this.userService.get();
  }
  // GET request with query parameters
  @Get('get_user/')
  getUser(
    @Query('userId', ParseIntPipe) id: number,
    @Query('name') name: string,
  ) {
    return this.userService.getUser(name, id);
  }
  // POST request with body
  @Post()
  store(@Body() body: User) {
    return this.userService.create(body);
  }
  @Patch(':id')
  update(@Param() param: { id: number }, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto, param);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
