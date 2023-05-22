import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { creatUserType } from 'src/users/utils/types';

// We can use this Injectable class anywhere we want.
@Injectable()
export class UsersService {
    private fakeUser : creatUserType[] = [
        { username: "Test username", email: "test@eamil.com", id : 1 },
        { username: "Test username 2", email: "test@eamil2.com", id : 2 },
    ]
    fetchUser() {
        console.log("fetchUser: fetch user service being called...")
        return this.fakeUser
    }

    createUser(userDetails : creatUserType){
        console.log("createUser: fetch user service being called...")
        this.fakeUser = [...this.fakeUser , {...userDetails}]
        return {data : userDetails , status : "data was added sucessfully..."};
    }

    getUserById(id : number){
        console.log("getUserById: fetch user service being called...")
        const userData = this.fakeUser.filter((user) =>  user.id === id);

        if(userData.length === 0){
            throw new HttpException('user not found' , HttpStatus.BAD_REQUEST);
        }
        return userData;
    }
}
