import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './dto/post-user';

@Injectable()
export class UserService {
  get() {
    return { name: 'Uchechukwu Azubuko', country: 'Nigeria' };
  }
  getUser(name: string, id: number) {
    return { name, id };
  }
  create(body: User) {
    return body;
  }
  update(updateUserDto: UpdateUserDto, param: { id: number }) {
    return { body: updateUserDto, param: param };
  }
  delete(id: number) {
    return { id };
  }
}
