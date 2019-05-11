import { Module, Global } from '@nestjs/common';
import { CardModule } from './card/card.module';
import { GrpcClientFactory } from './grpc/grpc.client-factory';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(), CardModule],
  providers: [GrpcClientFactory],
  exports: [GrpcClientFactory],
})
export class AppModule {}
