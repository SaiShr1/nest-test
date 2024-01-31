import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { CTModule } from './myJJK/ct.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UserModule,
    BookmarkModule,
    CTModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cursed_energy'),
  ],
})
export class AppModule {}
