import { 
  Body,
  Controller, 
  Delete, 
  Get ,
  Param, 
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PapersService } from './papers.service';
import { Papers } from './papers.entity';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { CreatePaperDto } from './dto/create-paper.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@UseGuards( JwtAuthGuard )
@Controller('papers')
export class PapersController {
  constructor( private papersService: PapersService ) {}


 
  @Get()
    getPapers(): Promise<Papers[]> {
    return this.papersService.getPapers() ;
  }

  @Get('id/:idPaper')
  getPaper( @Param('idPaper' , ParseIntPipe) idPaper: number ):
    Promise<Papers>{
        return this.papersService.getPaper( idPaper ) ;
  }

  @Get( 'route/:route' )
    getRoutePapers( @Param( 'route' ) route: string  ): Promise<Papers[]> {
    return this.papersService.getRoutePapers( route ) ;
  }

  @Get( 'article/:article' )
    getArticlePapers( @Param( 'article' ) article: string  ): Promise<Papers[]> {
    return this.papersService.getArticlePapers( article ) ;
  }

  @Post()
  createPaper( @Body() newPaper: CreatePaperDto ){
    return this.papersService.createPaper( newPaper );

  }

  @Patch( 'patch/:idPaper' )
  updatePaper( @Param( 'idPaper' , ParseIntPipe ) idPaper: number , @Body()
    paper: UpdatePaperDto
  ){
    return this.papersService.updatePaper( idPaper , paper ) ;
  }

  @Delete('id/:idPaper')
  deleteCard( @Param( 'idPaper' , ParseIntPipe  ) idPaper: number){
      return this.papersService.deletePaper( idPaper ) ;

  }
}