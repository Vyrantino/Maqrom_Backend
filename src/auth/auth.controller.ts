import { Body, Controller , Get, Post, Req,  } from '@nestjs/common';
import { AuthsService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { AuthDto } from './dto/auth.dto';




@Controller('auth')
export class AuthsController {
    constructor( private readonly authsService: AuthsService ) {}


    
    // @Post( 'register' )
    // registerUser( @Body()  userObject: RegisterAuthDto ) {
    //     console.log( { body: userObject } )
    //     return this.authsService.register( userObject ) ; 
       
    // }

    @Post( 'login' )
    loginIUser( @Body() userObjectLogin: AuthDto ){
       
        return this.authsService.login( userObjectLogin ) ;

    }


}
