import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GalleriesService } from './galleries.service';
import { GalleriesController } from './galleries.controller';
import { Galleries } from './galleries.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Galleries])],
  providers: [GalleriesService],
  controllers: [GalleriesController],
})


export class GalleriesModule {

}


