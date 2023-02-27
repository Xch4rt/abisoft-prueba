import { Test, TestingModule } from '@nestjs/testing';
import { PlatesCrudController } from './plates_crud.controller';
import { PlatesCrudService } from './plates_crud.service';

describe('PlatesCrudController', () => {
  let controller: PlatesCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatesCrudController],
      providers: [PlatesCrudService],
    }).compile();

    controller = module.get<PlatesCrudController>(PlatesCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
