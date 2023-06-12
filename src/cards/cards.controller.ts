import { 
  Body, 
  Controller, 
  Get , 
  Post ,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  UseGuards,
  Query
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { Cards } from './cards.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

import { ApiBearerAuth , ApiTags } from '@nestjs/swagger';
import { query } from 'express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';





@ApiBearerAuth()
//@UseGuards( JwtAuthGuard )
@ApiTags( 'Cards' )
@Controller('cards')
export class CardsController {
  constructor( private cardsService: CardsService ){}
      


      @Get('route/:route')
      getRouteCards( @Param( 'route' ) route: string  ): Promise<Cards[]>{
        return this.cardsService.getRouteCards( route ) ; 

      }

      @Get('article/:article')
      getArticleCards( @Param( 'article' ) article: string  ): Promise<Cards[]>{
        return this.cardsService.getArticleCards( article ) ; 

      }
      

      @Get('id/:idCard')
      getCard( @Param('idCard' , ParseIntPipe) idCard: number ):
        Promise<Cards>{
            return this.cardsService.getCard( idCard ) ;

      }
     
      @Get()
        getCards(): Promise<Cards[]> {
        return this.cardsService.getCards() ;
      }

      @Post()
      createCard( @Body() newCard: CreateCardDto ){
        return this.cardsService.createCard( newCard );

      }

      @Delete('id/:idCard')
      deleteCard( @Param( 'idCard' , ParseIntPipe  ) idCard: number){
          return this.cardsService.deleteCard( idCard ) ;

      }

      @Patch( 'patch/:idCard' )
      updateCard( @Param( 'idCard' ,  ParseIntPipe, ParseIntPipe  ) idCard: number , @Body()
        card: UpdateCardDto
      ){
        return this.cardsService.updateCard( idCard , card) ;

      }

}