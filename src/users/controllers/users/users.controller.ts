import { Controller, Get, Post, Req, Res, Param, Query, ValidationPipe } from '@nestjs/common';
import { Body, UsePipes } from '@nestjs/common/decorators';
import { ParseBoolPipe, ParseIntPipe } from '@nestjs/common/pipes';
import { Request, Response } from "express";
import { CreateUserDto } from 'src/users/dtos/CreateUsers.dto';

@Controller('users')
export class UsersController {

    //Query => to validate the query (here validating if it is boolean)
    @Get()
    getUsers(@Query('sortAsc', ParseBoolPipe) sortAsc: boolean) {
        console.log("sortAsc" , sortAsc)
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
    @UsePipes(new ValidationPipe)
    createUser(@Body() userPayload : CreateUserDto) {
        console.log("userPayload" , userPayload);
        return {}
    }
    //ParseIntPipe => is used to convert string to number
    //TO validate the parameters in post request.
    
    @Get(':id/:postId')
    getUserById(@Param('id' , ParseIntPipe) id : number,  @Param('postId', ParseIntPipe) postId : number){

        console.log({id , postId})
        return {id , postId}

    }
}
