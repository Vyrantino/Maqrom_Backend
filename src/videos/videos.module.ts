import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosService } from './videos.service';
import { VideosController } from './videos.controller';
import { Videos } from './videos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Videos])],
  providers: [VideosService],
  controllers: [VideosController],
})
export class VideosModule {}