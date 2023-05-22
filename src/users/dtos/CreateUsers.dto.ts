import { IsNotEmpty ,IsEmail } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username : String;
    @IsEmail()
    @IsNotEmpty()
    email : String
}