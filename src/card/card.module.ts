import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { Card } from './card.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './card.controller';
import { UserService } from 'src/user/user.service';
import { LocationService } from 'src/location/location.service';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardService, UserService, LocationService],
  controllers: [CardController]
})
export class CardModule {}