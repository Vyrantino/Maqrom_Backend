import { 
  Body, 
  Controller, 
  Get , 
  Post ,
  Param,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { GalleriesService } from './galleries.service';
import { Galleries } from './galleries.entity';
import {  CreateGalleryDto } from './dto/create-article.dto';
import { UpdateGalleryDto } from './dto/update-article.dto';

import { ApiBearerAuth , ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



@ApiBearerAuth()
@ApiTags( 'Galleries' )
//@UseGuards( JwtAuthGuard )
@Controller('galleries')
export class GalleriesController {
  constructor( private galleriesService: GalleriesService ){}

      @Get()
        getGalleries(): Promise<Galleries[]> {
        return this.galleriesService.getGalleries() ;
      }

      @Post()
      createGallery( @Body() newArticle: CreateGalleryDto ){
        return this.galleriesService.createGallery( newArticle );

      }

      @Delete(':name')
      deleteGallery( @Param( 'name' ) articleName: string){
          return this.galleriesService.deleteGallery( articleName ) ;
      }

      @Patch( 'patch/:name' )
      updateGallery( @Param( 'name'  ) articleName: string , @Body()
        article: UpdateGalleryDto
      ){
        return this.galleriesService.updateGallery( articleName , article) ;

      }

}