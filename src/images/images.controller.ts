import { 
  Controller, 
  Get , 
  Post , 
  Body , 
  Param ,
  Res,
  ParseIntPipe,
  Delete,
  Query
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { join } from 'path';
import { Response } from 'express';
import { Images } from './images.entity';
import { PaginationImagesDto } from './dto/pagination-images.dto';


@Controller('images')
export class ImagesController {
  constructor ( private readonly imagesService: ImagesService ){}



  @Post()
      createImage( @Body() newImage: UpdateImageDto  ){
        return this.imagesService.registerImage( newImage );

  }

  @Get('id/:idImage')
  getImageName( @Param('idImage' , ParseIntPipe) idImage: number ):
    Promise<Images>{
        return this.imagesService.findOne( idImage ) ;

  }
 
  @Get(':filename')
  serveImage( @Param('filename') filename: string, @Res() res: Response){
    
    const imagePath = join( __dirname , '../..' ,'/uploadedImages/' , filename ) ;
    res.sendFile( imagePath ) ;
  }

    
  @Get( )
  getImages( @Query() pagination: PaginationImagesDto  ): Promise<Images[]> {
    return this.imagesService.getImages( pagination ) ;
  }

  @Get( 'gallery/:gallery' )
  getImageGallery( @Param( 'gallery' ) gallery: string ): Promise<Images[]>{
    return this. imagesService.getImageGallery( gallery ) ;

  }


  @Delete('name/:name')
  deleteImage( @Param('name') name: string){
      return this.imagesService.remove( name ) ;

  }
}