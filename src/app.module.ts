import { Module } from '@nestjs/common';
import { PlatformModule } from './platform/platform.module'; // Adjust path if necessary
import { Transport, ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    PlatformModule, // Import PlatformModule here
    ClientsModule.register([
      {
        name: 'PLATFORM_SERVICE', // Service identifier for platform service
        transport: Transport.TCP, // TCP transport configuration
        options: {
          host: 'localhost', // Set the host (could be different in real setup)
          port: 3002, // Set port for Platform Service (should be different from UserService)
        },
      },
    ]),
  ],
  providers: [],
})
export class AppModule {}
