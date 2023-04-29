import { Controller, Get } from '@nestjs/common';

@Controller('carousels')
export class CarouselsController {
  @Get()
  findAll(): string {
    return 'carousels';
  }
}