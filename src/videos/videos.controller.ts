import { Controller, Get } from '@nestjs/common';

@Controller('videos')
export class VideosController {
  @Get()
  findAll(): string {
    return 'This action returns all videos';
  }
}