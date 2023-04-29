import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Videos } from './videos.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(Videos)
    private videosRepository: Repository<Videos>,
  ) {}


  findOne(idVideo: number): Promise<Videos | null> {
    return this.videosRepository.findOneBy({ idVideo });
  }

  async remove(idVideo: number): Promise<void> {
    await this.videosRepository.delete(idVideo);
  }
}