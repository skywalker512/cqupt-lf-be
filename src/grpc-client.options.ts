import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0' + ':50054',
    package: 'cqupt_lf_be',
    protoPath: join(__dirname, './protobufs/cqupt_lf_be.proto'),
    loader: {
      arrays: true
    }
  },
}