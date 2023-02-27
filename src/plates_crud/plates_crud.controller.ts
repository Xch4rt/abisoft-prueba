import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlatesCrudService } from './plates_crud.service';
import { CreatePlatesCrudDto } from './dto/create-plates_crud.dto';
import { UpdatePlatesCrudDto } from './dto/update-plates_crud.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('CRUD Plates')
@Controller('v1/plates')
export class PlatesCrudController {
  constructor(private readonly platesCrudService: PlatesCrudService) {}

  @ApiResponse({
    status: 201,
    description: 'The plate has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(@Body() createPlatesCrudDto: CreatePlatesCrudDto) {
    if (createPlatesCrudDto.price >= 9 && createPlatesCrudDto.price <= 25) {
      return await this.platesCrudService.create(createPlatesCrudDto);
    } else {
      return 'The price must be between 9 and 25';
    }
  }

  @ApiResponse({
    status: 200,
    description: 'The plate has been successfully found.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get()
  async findAll() {
    return await this.platesCrudService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'The plate has been successfully found.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platesCrudService.findOne(+id);
  }

  @ApiResponse({
    status: 200,
    description: 'The plate has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlatesCrudDto: UpdatePlatesCrudDto,
  ) {
    return await this.platesCrudService.update(+id, updatePlatesCrudDto);
  }

  @ApiResponse({
    status: 200,
    description: 'The plate has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.platesCrudService.remove(+id);
  }
}
