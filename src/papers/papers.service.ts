import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Papers } from './papers.entity';
import { UpdatePaperDto } from './dto/update-paper.dto';
import { CreatePaperDto } from './dto/create-paper.dto';

@Injectable()
export class PapersService {
  constructor(
    @InjectRepository(Papers)
    private papersRepository: Repository<Papers>,
  ) {}

  getPapers(): Promise<Papers[]> {
    return this.papersRepository.find();
  }

  getPaper(idPaper: number): Promise<Papers | null> {
    return this.papersRepository.findOneBy({ idPaper });
  }

  updatePaper( idPaper: number, paper: UpdatePaperDto ){
    return this.papersRepository.update( { idPaper } , paper )
  }

  createPaper( paper: CreatePaperDto ){
    const newPaper = this.papersRepository.create( paper ) ;
    return this.papersRepository.save( newPaper ) ;
  }

}