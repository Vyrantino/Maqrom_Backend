import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository , EntityManager } from 'typeorm';
import { Galleries } from './galleries.entity';
import { CreateGalleryDto  } from './dto/create-article.dto' ;
import { UpdateGalleryDto  } from './dto/update-article.dto' ;  
import { Images } from 'src/images/images.entity';
import { CarouselItems } from 'src/carousels/carouselItems.entity';

@Injectable()
export class GalleriesService {
  constructor(
    @InjectRepository(Galleries)
    @InjectRepository( Images )
    private galleriesRepository: Repository<Galleries>,
    private readonly entityManager: EntityManager,
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
    await this.entityManager.transaction( async ( transactionManager ) =>{
      await transactionManager.delete( Images, { gallery: galleryName } ) ;
      await transactionManager.delete( Galleries, {  galleryName } ) ;
    } )
  }

  updateGallery( galleryName: string, gallery: UpdateGalleryDto ){
    return this.galleriesRepository.update( { galleryName } , gallery )
  }
}