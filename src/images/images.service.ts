import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from './images.entity';
import { UpdateImageDto } from './dto/update-image.dto';
import * as fs from 'fs' ;

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private imagesRepository: Repository<Images>,
  ) {}


  findOne(idImage: number): Promise<Images | null> {
    return this.imagesRepository.findOneBy({ idImage });
  }

  async remove(idImage: number): Promise<void> {
    await this.imagesRepository.delete(idImage);
  }

  
  registerImage( image: UpdateImageDto ){
    const newImage = this.imagesRepository.create( image ) ;
    return this.imagesRepository.save( image ) ;
  }



}