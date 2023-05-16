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
import { PapersService } from './papers.service';
import { Papers } from './papers.entity';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { CreatePaperDto } from './dto/create-paper.dto';


@Controller('papers')
export class PapersController {
  constructor( private papersService: PapersService ) {}


  @Get('id/:idPaper')
  getPaper( @Param('idPaper' , ParseIntPipe) idPaper: number ):
    Promise<Papers>{
        return this.papersService.getPaper( idPaper ) ;

  }
 
  @Get()
    getPapers(): Promise<Papers[]> {
    return this.papersService.getPapers() ;
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
}