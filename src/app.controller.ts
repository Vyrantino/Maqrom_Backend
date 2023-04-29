import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect( 'http://localhost:5173' , 302 )
  @Get()
  getHello() {
    
  }

  
}
