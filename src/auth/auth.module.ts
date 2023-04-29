import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Auths } from "./auth.entity";
import { AuthsService } from "./auth.service";
import { AuthsController } from "./auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstant } from "./jwt.constants";
import { JwtStrategy } from "./jwt.strategy";


@Module({
    imports: [ 
        TypeOrmModule.forFeature( [ Auths ] ) ,
        JwtModule.register({
            secret: jwtConstant.secret, 
            signOptions: { expiresIn: '60s'  },

        })
    ],
    providers: [ AuthsService , JwtStrategy ] , 
    controllers: [ AuthsController ],
}) 

export class AuthsModule{


}