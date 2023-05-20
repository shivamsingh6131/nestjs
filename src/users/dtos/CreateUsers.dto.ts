import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    username : String;
    @IsNotEmpty()
    email : String
}