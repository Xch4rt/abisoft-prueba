import { Test, TestingModule } from '@nestjs/testing';
import { PlatesCrudService } from './plates_crud.service';

describe('PlatesCrudService', () => {
  let service: PlatesCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatesCrudService],
    }).compile();

    service = module.get<PlatesCrudService>(PlatesCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
