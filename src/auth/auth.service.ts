import { Body, HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Auths } from "./auth.entity";
import { AuthDto } from "./dto/auth.dto";
import { RegisterAuthDto } from "./dto/register-auth.dto";
import { hash , compare } from 'bcrypt'
import { JwtService } from '@nestjs/jwt' ;



@Injectable()
export class AuthsService{
    constructor( 
        @InjectRepository( Auths )
        private authsRepository: Repository< Auths > ,
        private jwtService: JwtService
     ) {}

    async register( userObject: RegisterAuthDto ){
        const { password } = userObject ; 
        const plainToHash = await hash( password, 10 ) ;
        userObject = { ...userObject, password: plainToHash };
        const newUser = this.authsRepository.create( userObject ) ;
        return this.authsRepository.save( newUser ) ; 
    }

    async login( userObjectLogin: AuthDto ) {
        const { email , password } = userObjectLogin ; 
        const findUser = await this.authsRepository.findOne( { where: { email } } )
        if(!findUser) throw new HttpException( 'Usuario no se encontro',404 ) ;

        const checkPassword = await compare( password, findUser.password )
        if(!checkPassword) throw new HttpException('CONTRASEÑA INCORRECTA' , 403 ) 

        const payload = { idAuth: findUser.idAuth, name: findUser.username  } ; 
        const token =  this.jwtService.sign( payload ) ;

        const data = {
            user: findUser, 
            token      
        } ; 

        return data.token ; 
    }    

}
