import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { FilterPlaceDto } from './dtos/filter-place.dto';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/database/entities/place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private readonly placeRepository: Repository<Place>
  ){}

  async find(dto: FilterPlaceDto): Promise<Place[]> {
    return await this.placeRepository.findBy(dto);
  }

  async findOne(id: string): Promise<Place> {
    const place = await this.placeRepository.findOneBy({id})
    if (!place) throw new NotFoundException();
    return place;
  }

  async create(dto: CreatePlaceDto): Promise<Place> {
    const place = new Place();
    place.name = dto.name;
    place.city = dto.city;
    place.state = dto.state;
    place.isDeleted = false;
    return await this.placeRepository.save(place);
  }

  async update(id: string, dto: UpdatePlaceDto) {
    const place = await this.placeRepository.findOneBy({id});

    if (!place) throw new NotFoundException();

    place.name = dto.name;
    place.city = dto.city;
    place.state = dto.state;
    return await this.placeRepository.save(place);
  }

  async delete(id: string) {
    const place = await this.placeRepository.findOneBy({id});

    if (!place) throw new NotFoundException();

    place.isDeleted = true;
    return await this.placeRepository.save(place);
  }
}
