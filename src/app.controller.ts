import { Controller, Get, Redirect , Post , UseInterceptors, UploadedFile, ParseFilePipe, FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import axios from 'axios';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Redirect( 'http://localhost:5173' , 302 )
 
  @Post()
  @UseInterceptors( FileInterceptor( 'image' ,  {
     storage: diskStorage({
        destination: function( res, file, cb ){
          cb( null, './uploadedImages' )

        },
        filename: function( res, file, cb ){
        
          cb( null , file.originalname )

        },
     }) 

   
  })) 
  async uploadFile( @UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
      ],
    }),

  ) file: Express.Multer.File  ){
    console.log( file )
    const archivo = {
      alt: 'meh',
      name: file.filename ,
      path: file.path,
      type: file.mimetype,
      modified: Date.now()

    }
    try{
      const registrarArchivo = await axios.post( 'http://localhost:3000/images', archivo  )
      console.log( registrarArchivo ) ;
    }
    catch( error ){
      console.error( error ) ;

    }

  
  }
  
}
