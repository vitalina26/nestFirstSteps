import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from "uuid";
import { UserRegister } from './model/user-redister';
import { registers } from 'src/mock/registers';
import { UserDto } from './model/user-register-dto';
@Injectable()
export class RegisterService {
    users: UserRegister[] = registers;
    createUser(userDto:UserRegister): UserDto {
        const user : UserDto = {
            id: uuidv4(),
            ...userDto
        }
        this.users.push(user)
        return user;
    }

    isRegistrated(userDto:UserRegister): boolean{
        const isOne = this.users.find(user => user.email === userDto.email);
        return isOne ? true : false;
    }
}
