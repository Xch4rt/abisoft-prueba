import { PartialType } from '@nestjs/swagger';
import { CreatePlatesCrudDto } from './create-plates_crud.dto';

export class UpdatePlatesCrudDto extends PartialType(CreatePlatesCrudDto) {}
