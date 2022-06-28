import { IUserService } from '../../app/services/i_user_service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly userService: IUserService) {}

  @Get()
  getHello(): void {
    return this.userService.getUser();
  }
}
