import { Module, Global } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { GrpcClientFactory } from './grpc/grpc.client-factory';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationModule } from './location/location.module';
import { UserModule } from './user/user.module';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(), CardModule, LocationModule, UserModule],
  providers: [GrpcClientFactory],
  exports: [GrpcClientFactory],
})
export class AppModule {}
