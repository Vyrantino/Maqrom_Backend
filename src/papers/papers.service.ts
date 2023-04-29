import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Papers } from './papers.entity';

@Injectable()
export class PapersService {
  constructor(
    @InjectRepository(Papers)
    private papersRepository: Repository<Papers>,
  ) {}

  findAll(): Promise<Papers[]> {
    return this.papersRepository.find();
  }

  findOne(idPaper: number): Promise<Papers | null> {
    return this.papersRepository.findOneBy({ idPaper });
  }

  async remove(idPaper: number): Promise<void> {
    await this.papersRepository.delete(idPaper);
  }
}