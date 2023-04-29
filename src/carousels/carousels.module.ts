import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarouselsService } from './carousels.service';
import { CarouselsController } from './carousels.controller';
import { Carousels } from './carousels.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carousels])],
  providers: [CarouselsService],
  controllers: [CarouselsController],
})
export class CarouselsModule {}