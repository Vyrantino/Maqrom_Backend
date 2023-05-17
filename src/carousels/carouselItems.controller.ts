import { 
  Body,
  Controller, 
  Delete, 
  Get ,
  Param, 
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarouselItemsService } from './carouselItems.service';
import { CarouselItems } from './carouselItems.entity';
import { CreateCarouselItem } from './dto/create-carouselItem.dto';
import { UpdateCarouselDto } from './dto/update-carousel.dto';

@Controller('carouselItems')
export class CarouselsController {
  constructor( private carouselsService: CarouselItemsService ) {}
  
  
  @Get('route/:route')
  getRouteCarouselItems( @Param( 'route' ) route: string  ): Promise<CarouselItems[]>{
    return this.carouselsService.getCarouselItems( route ) ; 
  
  }

  @Get('article/:article')
  getArticleCarouselItems( @Param( 'article' ) article: string  ): Promise<CarouselItems[]>{
    return this.carouselsService.getArticleCarouselItems( article ) ; 

  }

  @Get('id/:idCard')
  getCarouselItem( @Param('idCard' , ParseIntPipe) idCard: number ):
    Promise<CarouselItems>{
        return this.carouselsService.getCarouselItem( idCard ) ;

  }
 
  @Get()
    getCarouselItems(): Promise<CarouselItems[]> {
    return this.carouselsService.getAllCarouselItems() ;
  }

  @Post()
  createCarouselItem( @Body() newCarouselItem: CreateCarouselItem ){
    return this.carouselsService.createCarouselItem( newCarouselItem );

  }

  @Delete('id/:idCarouselItem')
  deleteCarouselItem( @Param( 'idCarouselItem' , ParseIntPipe ) idCarouselItem: number){
      return this.carouselsService.deleteCarouselItem( idCarouselItem ) ;

  }

  @Patch( 'id/:idCarouselItem' )
  updateCarouselItem( @Param( 'idCarouselItem' , ParseIntPipe ) idCarouselItem: number , @Body()
    carousel: UpdateCarouselDto
  ){
    return this.carouselsService.updateCarousel( idCarouselItem , carousel ) ;
  }
}