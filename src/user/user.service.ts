import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>
  ) {}

  async findOneUserOrCreate(id: string) {
    let user = await this.userRepo.findOne(id)
    if(!user) user = await this.userRepo.save(this.userRepo.create({ id }))
    return user
  }
}
