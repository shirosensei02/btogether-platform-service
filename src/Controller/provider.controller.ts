import { Controller, Get } from '@nestjs/common';
import { ProviderService } from '../Service/provider.service';

@Controller('providers')
export class ProviderController {
  constructor(private readonly providerService: ProviderService) {}

  @Get()
  getProviders() {
    return this.providerService.getProviders();
  }
}
