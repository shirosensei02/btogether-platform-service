import { Controller, Get, Post, Body } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './create.platform.dto';
import { Platform } from './platform.interface';

@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}

  @Get()
  findAll(): Platform[] {
    return this.platformService.findAll();
  }

  @Post()
  create(@Body() createPlatformDto: CreatePlatformDto): Platform {
    return this.platformService.create(createPlatformDto);
  }
}
