import { Controller, Get } from '@nestjs/common';

@Controller('images')
export class ImagesController {
  @Get()
  findAll(): string {
    return 'images';
  }
}