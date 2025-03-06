import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProviderController } from './Controller/provider.controller';
import { ProviderService } from './Service/provider.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PLATFORM_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'platform_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ProviderController],
  providers: [ProviderService],
})
export class AppModule {}
