import { IsNotEmpty ,IsEmail, IsNumber } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username : string;
    @IsEmail()
    @IsNotEmpty()
    email : string
}

//validate request body
export class CreatUserWithIdDto {
    @IsNotEmpty()
    username : string;
    @IsEmail()
    @IsNotEmpty()
    email : string;
    @IsNotEmpty()
    @IsNumber()
    id : number
}