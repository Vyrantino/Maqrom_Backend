import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarouselItemsService } from './carouselItems.service';
import { CarouselsController } from './carouselItems.controller';
import { CarouselItems } from './carouselItems.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CarouselItems])],
  providers: [CarouselItemsService],
  controllers: [CarouselsController],
})
export class CarouselItemsModule {}