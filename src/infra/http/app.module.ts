import { Module } from '@nestjs/common';
import { UserService } from 'src/app/services/impl/user_service';
import { AppController } from './app.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: UserService,
      useClass: UserService,
    },
  ],
})
export class AppModule {}
