import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from './images.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private imagesRepository: Repository<Images>,
  ) {}


  findOne(idImage: number): Promise<Images | null> {
    return this.imagesRepository.findOneBy({ idImage });
  }

  async remove(idImage: number): Promise<void> {
    await this.imagesRepository.delete(idImage);
  }
}