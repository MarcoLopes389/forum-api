import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { UserService } from 'src/app/services/impl/user_service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: 'UserService',
      useClass: UserService,
    },
  ],
})
export class UserModule {}
