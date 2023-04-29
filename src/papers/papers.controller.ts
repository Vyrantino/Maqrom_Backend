import { Controller, Get } from '@nestjs/common';

@Controller('papers')
export class PapersController {
  @Get()
  findAll(): string {
    return 'This action returns all papers';
  }
}