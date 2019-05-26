import { Module, Global } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { GrpcClientFactory } from './grpc/grpc.client-factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';
import { Card } from './card/card.entity';
import { LocationTag, FoundLocation } from './location/location.entity';
import { User } from './user/user.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot({
    keepConnectionAlive: true,
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    database: "cqupt_lf",
    entities: [Card, LocationTag, FoundLocation, User],
    synchronize: true
  }), CardModule, LocationModule, UserModule],
  providers: [GrpcClientFactory],
  exports: [GrpcClientFactory],
})
export class AppModule { }
