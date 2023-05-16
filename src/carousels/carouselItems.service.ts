import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarouselItems } from './carouselItems.entity';
import { UpdateCarouselDto } from './dto/update-carousel.dto';
import { CreateCarouselItem } from './dto/create-carouselItem.dto';

@Injectable()
export class CarouselItemsService {
  constructor(
    @InjectRepository(CarouselItems)
    private carouselsRepository: Repository<CarouselItems>,
  ) {}

  getAllCarouselItems(): Promise<CarouselItems[]>{
    return this.carouselsRepository.find() ;
  }

  getCarouselItem(idCarouselItem: number): Promise<CarouselItems | null> {
    return this.carouselsRepository.findOneBy({ idCarouselItem });
  }

  updateCarousel( idCarouselItem: number , carousel: UpdateCarouselDto ){
    return this.carouselsRepository.update( { idCarouselItem } , carousel ) ;

  }

  getCarouselItems( route: string ): Promise<CarouselItems[] | null>{
    return this.carouselsRepository.find( { where: { route } } ) ;
  }

  createCarouselItem( carouselItem: CreateCarouselItem ){
    const newCarouselItem = this.carouselsRepository.create( carouselItem ) ;
    return this.carouselsRepository.save( newCarouselItem ) ;
  }

  async deleteCarouselItem( idCarouselItem: number): Promise<void> {
    await this.carouselsRepository.delete( idCarouselItem ) ;
  }

}