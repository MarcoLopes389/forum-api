import { Controller, Get, Inject, Res } from '@nestjs/common';
import { Response } from 'express';
import { IUserService } from 'src/app/services/i_user_service';

@Controller()
export class UserController {
  constructor(
    @Inject('UserService') private readonly userService: IUserService,
  ) {}

  @Get()
  getUser(@Res() res: Response): Response {
    return res.json(this.userService.getUser());
  }
}
