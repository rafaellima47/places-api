import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/database/entities/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserService } from './user.service';
import { AuthenticateUserDto } from './dtos/authenticate-user.dto';


@Controller('users')
export class UserController {
  
  constructor(
    private readonly userService: UserService
  ){}

  @Post()
  async create(@Body() body: CreateUserDto) {
    return {
      data: await this.userService.create(body)
    }
  }

  @Post('authenticate')
  async authenticate(@Body() body: AuthenticateUserDto) {
    return {
      data: await this.userService.authenticate(body)
    }
  }
}
