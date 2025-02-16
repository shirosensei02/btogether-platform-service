import { Injectable } from '@nestjs/common';
import { CreatePlatformDto } from './create.platform.dto';
import { Platform } from './platform.interface';

@Injectable()
export class PlatformService {
  private readonly platforms: Platform[] = [];
  private platformId = 1; // Start ID from 1 and increment with each new platform

  findAll() {
    return this.platforms;
  }

  create(createPlatformDto: CreatePlatformDto): Platform {
    const newPlatform: Platform = {
      id: this.platformId++, // Increment platform ID
      name: createPlatformDto.name,
      type: createPlatformDto.type,
    };
    this.platforms.push(newPlatform);
    return newPlatform;
  }
}
