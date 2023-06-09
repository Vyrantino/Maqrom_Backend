import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Images } from './images.entity';
import { UpdateImageDto } from './dto/update-image.dto';
import * as fs from 'fs' ;
import { PaginationImagesDto } from './dto/pagination-images.dto';
import path, { join } from 'path';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Images)
    private imagesRepository: Repository<Images>,
  ) {}

  findOne(idImage: number): Promise<Images | null> {
    return this.imagesRepository.findOneBy({ idImage });
  }

  async remove(name: string): Promise<void> {

    //const filePath = __dirname+ `../../../uploadedImages/${name}`;
    //const filePath = `/root/Vaquero_backend/uploadedImages/${name}`;
    //const filePath = path.resolve("/root/Vaquero_backend/uploadedImages/" , name) ; 
    const filePath = join( __dirname , '../..' ,'/uploadedImages/' , name ) ;
    fs.unlinkSync( filePath ) ;
    await this.imagesRepository.delete( { name: name } ) ;
  }

  
  registerImage( image: UpdateImageDto ){
    const newImage = this.imagesRepository.create( image ) ;
    return this.imagesRepository.save( image ) ;
  }


  getImages( { limit, offset }: PaginationImagesDto ): Promise<Images[]> {
    return this.imagesRepository.find( { skip: offset , take: limit } );
  }

  getImageGallery( gallery: string ): Promise<Images[]>{
    return this.imagesRepository.find( { where: { gallery }  } );

  }


}