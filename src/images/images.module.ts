import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { Images } from './images.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Images])],
  providers: [ImagesService],
  controllers: [ImagesController],
})
export class ImagesModule {}