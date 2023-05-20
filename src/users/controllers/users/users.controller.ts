import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from "express";

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
    createUser(@Req() request : Request , @Res() response : Response) {
        console.log("request body" , request.body);
        console.log("request header" , request.headers);

        response.send("userCreated")
    }
}
