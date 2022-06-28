import { UserModule } from './modules/user/user.module';
import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { PostsModule } from './modules/posts/posts.module';

@Module({
  imports: [
    UserModule,
    PostsModule,
    RouterModule.register([
      {
        path: 'user',
        module: UserModule,
      },
      {
        path: 'post',
        module: PostsModule,
      },
    ]),
  ],
})
export class AppModule {}
