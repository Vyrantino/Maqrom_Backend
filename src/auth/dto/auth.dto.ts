import { IsEmail , MaxLength , MinLength } from "class-validator";

export class AuthDto{

    @IsEmail()
    email: string ; 

    @MinLength( 4 )
    @MaxLength( 12)
    password: string ; 
}