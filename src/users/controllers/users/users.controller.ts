import { Controller, Get, Post, Req, Res, Param } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { Request, Response } from "express";
import { CreateUserDto } from 'src/users/dtos/CreateUsers.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers() {
        return [
            {
                userName: "test username",
                email: "test@mail.com"
            }
        ]
    }

    @Get('posts')
    getUserPosts() {
        return [
            {
                userName: "test username",
                email: "test@mail.com"
                ,
                posts: [
                    {
                        id: 1,
                        name: "post one"
                    }
                ]
            }
        ]
    }

    @Post('createUser')
    createUser(@Body() userPayload : CreateUserDto) {
        console.log("userPayload" , userPayload);
        return {}
    }

    @Get(':id/:postId')
    getUserById(@Param('id') id : String,  @Param('postId') postId : String){

        console.log({id , postId})
        return {id , postId}

    }
}
