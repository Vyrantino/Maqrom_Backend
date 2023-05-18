import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Galleries } from './galleries.entity';
import { CreateGalleryDto  } from './dto/create-article.dto' ;
import { UpdateGalleryDto  } from './dto/update-article.dto' ;  

@Injectable()
export class GalleriesService {
  constructor(
    @InjectRepository(Galleries)
    private galleriesRepository: Repository<Galleries>,
  ) {}

  createGallery( gallery: CreateGalleryDto ){
    const newPaper = this.galleriesRepository.create( gallery ) ;
    return this.galleriesRepository.save( newPaper ) ;
  }

  getGalleries(): Promise<Galleries[]> {
    return this.galleriesRepository.find();
  }


  getGallery(galleryName: string): Promise<Galleries | null> {
    return this.galleriesRepository.findOne( { where: { galleryName: galleryName } } );
  }


  async deleteGallery(galleryName: string): Promise<void> {
    await this.galleriesRepository.delete( { galleryName } );
  }

  updateGallery( galleryName: string, gallery: UpdateGalleryDto ){
    return this.galleriesRepository.update( { galleryName } , gallery )
  }
}