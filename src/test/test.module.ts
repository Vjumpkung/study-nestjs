import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestSchema } from './schemas/test.schema';
import { TestService } from './test.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
