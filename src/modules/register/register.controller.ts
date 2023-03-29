import { Controller,Post,Body } from '@nestjs/common';
import { UserDto } from './model/user-register-dto';
import { UserRegister } from './model/user-redister';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) { }
  @Post()
  register(@Body() userRegister : UserRegister):UserDto {
    return this.registerService.createUser(userRegister);
  }
}
