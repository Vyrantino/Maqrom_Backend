import { Controller, Get, Redirect , Req , Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Redirect( 'http://localhost:5173' , 302 )
 

  
}
