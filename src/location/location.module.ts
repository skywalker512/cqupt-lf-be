import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoundLocation, LocationTag } from './location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationTag, FoundLocation])],
  controllers: [LocationController],
  providers: [LocationService]
})
export class LocationModule {}
