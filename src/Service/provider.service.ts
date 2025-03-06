import { Injectable } from '@nestjs/common';

@Injectable()
export class ProviderService {
  private providers = [
    { id: '1', name: 'Plumbing Service', price: 100 },
    { id: '2', name: 'Electrician Service', price: 150 },
  ];

  getProviders() {
    return this.providers;
  }
}
