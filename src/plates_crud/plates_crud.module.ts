import { Module } from '@nestjs/common';
import { PlatesCrudService } from './plates_crud.service';
import { PlatesCrudController } from './plates_crud.controller';

@Module({
  controllers: [PlatesCrudController],
  providers: [PlatesCrudService],
})
export class PlatesCrudModule {}
