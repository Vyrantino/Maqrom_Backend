import { PartialType } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { AuthDto } from "./auth.dto";

export class RegisterAuthDto extends PartialType( AuthDto ){
    @IsNotEmpty()
    username: string ; 
}
