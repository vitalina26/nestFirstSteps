import { IsNotEmpty,IsEmail, MinLength } from "class-validator";
export class UserRegister {
   
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    secondname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @MinLength(8)
    @IsNotEmpty()
    password: string;

    
    @IsNotEmpty()
    phone: string;
}