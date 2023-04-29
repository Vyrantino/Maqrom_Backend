import {  Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { Cards } from './cards.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Cards])],
  providers: [CardsService],
  controllers: [CardsController],
})


export class CardsModule {

}


