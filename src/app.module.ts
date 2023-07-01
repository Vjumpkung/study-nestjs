import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.contoller';
import { UserModule } from './user/user.module';
import { TestModule } from './test/test.module';
import { TestSchema } from './test/schemas/test.schema';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TestModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
    MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }]),
  ],
})
export class AppModule {}
