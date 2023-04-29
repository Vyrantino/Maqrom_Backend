import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PapersService } from './papers.service';
import { PapersController } from './papers.controller';
import { Papers } from './papers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Papers])],
  providers: [PapersService],
  controllers: [PapersController],
})
export class PapersModule {}