import { Controller, Get, Post, Put, Body, Query, Delete, Param } from '@nestjs/common';
import { PlaceService } from './place.service';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { FilterPlaceDto } from './dtos/filter-place.dto';


@Controller('places')
export class PlaceController {
  constructor(
    private readonly placeService: PlaceService
  ) {}

  @Get()
  async find(@Query() query: FilterPlaceDto) {
    return {
      data: await this.placeService.find(query)
    }
  }

  @Get(':id') 
  async findOne(@Param('id') id: string) {
    return {
      data: await this.placeService.findOne(id)
    }
  }

  @Post()
  async create(@Body() body: CreatePlaceDto) {
    return {
      data: await this.placeService.create(body)
    }
  }

  @Put(':id')
  async update(@Body() body: UpdatePlaceDto, @Param('id') id: string) {
    return {
      data: await this.placeService.update(id, body)
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return {
      data: this.placeService.delete(id)
    }
  }
  
}
