import { Test, TestingModule } from '@nestjs/testing';
import { PlatformController } from './platform.controller';
import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './create.platform.dto';

describe('PlatformController', () => {
  let platformController: PlatformController;
  let platformService: PlatformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatformController],
      providers: [
        {
          provide: PlatformService,
          useValue: {
            findAll: jest
              .fn()
              .mockReturnValue([
                { id: 1, name: 'Service A', type: 'Cleaning' },
              ]),
            create: jest
              .fn()
              .mockImplementation((createPlatformDto: CreatePlatformDto) => ({
                id: 1,
                name: createPlatformDto.name,
                type: createPlatformDto.type,
              })),
          },
        },
      ],
    }).compile();

    platformController = module.get<PlatformController>(PlatformController);
    platformService = module.get<PlatformService>(PlatformService);
  });

  it('should be defined', () => {
    expect(platformController).toBeDefined();
  });

  it('should return all platforms from findAll()', () => {
    const result = platformController.findAll();
    expect(result).toEqual([{ id: 1, name: 'Service A', type: 'Cleaning' }]);
    expect(platformService.findAll).toHaveBeenCalled();
  });

  it('should create a platform from create()', () => {
    const createPlatformDto: CreatePlatformDto = {
      name: 'Service B',
      type: 'Delivery',
    };
    const result = platformController.create(createPlatformDto);
    expect(result).toEqual({ id: 1, name: 'Service B', type: 'Delivery' }); // Ensure the name and type are correct
    expect(platformService.create).toHaveBeenCalledWith(createPlatformDto);
  });
});
