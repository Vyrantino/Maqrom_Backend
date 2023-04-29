import { 
  Body, 
  Controller, 
  Get , 
  Post ,
  Param,
  ParseIntPipe,
  Delete,
  Patch,
  UseGuards
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { Cards } from './cards.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth , ApiTags } from '@nestjs/swagger';




@ApiBearerAuth()
@ApiTags( 'Cards' )
@Controller('cards')
export class CardsController {
  constructor( private cardsService: CardsService ){}
      @UseGuards( JwtAuthGuard )
      @Get()
        getCards(): Promise<Cards[]> {
        return this.cardsService.getCards() ;
      }

      @Get(':idCard')
      getCard( @Param('idCard' , ParseIntPipe) idCard: number ):
        Promise<Cards>{
            return this.cardsService.getCard( idCard ) ;

      }
 

      @Post()
      createCard( @Body() newCard: CreateCardDto ){
        return this.cardsService.createCard( newCard );

      }

      @Delete(':idCard')
      deleteCard( @Param( 'idCard' , ParseIntPipe ) idCard: number){
          return this.cardsService.deleteCard( idCard ) ;

      }

      @Patch( ':idCard' )
      updateCard( @Param( 'idCard' , ParseIntPipe ) idCard: number , @Body()
        card: UpdateCardDto
      ){
        return this.cardsService.updateCard( idCard , card) ;

      }

}