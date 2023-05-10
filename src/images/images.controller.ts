import { 
  Controller, 
  Get , 
  Post , 
  Body , 
  Param ,
  Res,
  ParseIntPipe
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { UpdateImageDto } from './dto/update-image.dto';
import { join } from 'path';
import { Response } from 'express';
import { Images } from './images.entity';


@Controller('images')
export class ImagesController {
  constructor ( private readonly imagesService: ImagesService ){}



  @Post()
      createCard( @Body() newImage: UpdateImageDto  ){
        return this.imagesService.registerImage( newImage );

  }

  @Get('id/:idImage')
  getImageName( @Param('idImage' , ParseIntPipe) idImage: number ):
    Promise<Images>{
        return this.imagesService.findOne( idImage ) ;

  }
 
  @Get(':filename')
  serveImage( @Param('filename') filename: string, @Res() res: Response){
    const imagePath = join( __dirname , '../..' ,'uploadedImages' , filename ) ; 
    res.sendFile( imagePath ) ;

  }

  

  // @Get()
  // async getAllFiles() {
  //   const filesInfo = await this.imagesService.getFilesInfo() ;
  //   return filesInfo;
  // }
}