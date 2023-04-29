import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carousels } from './carousels.entity';
import {  UpdateCarouselDto } from './dto/update-carousel.dto';

@Injectable()
export class CarouselsService {
  constructor(
    @InjectRepository(Carousels)
    private carouselsRepository: Repository<Carousels>,
  ) {}


  getCarousel(idCarousel: number): Promise<Carousels | null> {
    return this.carouselsRepository.findOneBy({ idCarousel });
  }

  updateCarousel( idCarousel: number , carousel: UpdateCarouselDto ){
    return this.carouselsRepository.update( { idCarousel } , carousel ) ;

  }
}