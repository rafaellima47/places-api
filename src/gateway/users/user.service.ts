import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/entities/user.entity';
import { Repository } from 'typeorm';
import { AuthenticateUserDto } from './dtos/authenticate-user.dto';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}
  
  async create(dto: CreateUserDto) {
    let user = await this.userRepository.findOneBy({email: dto.email});

    if (user) throw new ConflictException();

    user = new User();
    user.email = dto.email;
    user.password = dto.password;
    user.isDeleted = false;
    return await this.userRepository.save(user);
  }

  async authenticate(dto: AuthenticateUserDto) {
    const user = await this.userRepository.findOneBy(dto);

    if (!user) throw new UnauthorizedException();

    return 'token';
  }

}
