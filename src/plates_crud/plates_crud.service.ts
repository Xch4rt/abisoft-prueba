import { Injectable } from '@nestjs/common';
import { parse } from 'path';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlatesCrudDto } from './dto/create-plates_crud.dto';
import { UpdatePlatesCrudDto } from './dto/update-plates_crud.dto';

@Injectable()
export class PlatesCrudService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPlatesCrudDto: CreatePlatesCrudDto) {
    const parsedDate = new Date(createPlatesCrudDto.startDate);
    return await this.prisma.plates.create({
      data: {
        name: createPlatesCrudDto.name,
        color: createPlatesCrudDto.color,
        price: createPlatesCrudDto.price,
        isOffer: createPlatesCrudDto.IsOffer,
        startDate: parsedDate,
      },
    });
  }

  async findAll() {
    return await this.prisma.plates.findMany({
      where: {
        AND: [
          {
            isActive: true,
            startDate: {
              gte: new Date(
                new Date().getFullYear(),
                new Date().getMonth(),
                new Date().getDate(),
              ),
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        color: true,
        price: true,
        isOffer: true,
        startDate: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.plates.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        color: true,
        price: true,
        isOffer: true,
        startDate: true,
      },
    });
  }

  async update(id: number, updatePlatesCrudDto: UpdatePlatesCrudDto) {
    return await this.prisma.plates.update({
      where: {
        id: id,
      },
      data: {
        name: updatePlatesCrudDto.name,
        color: updatePlatesCrudDto.color,
        price: updatePlatesCrudDto.price,
        isOffer: updatePlatesCrudDto.IsOffer,
        startDate: updatePlatesCrudDto.startDate,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.plates.update({
      where: {
        id: id,
      },
      data: {
        deletedAt: new Date(),
        isActive: false,
      },
    });
  }
}
