import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './schemas/test.schema';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestService {
  constructor(@InjectModel('Test') private readonly testModel: Model<Test>) {}
  async create(test: CreateTestDto): Promise<Test> {
    const newTest = new this.testModel(test);
    return await newTest.save();
  }
  async findAll(): Promise<Test[]> {
    return await this.testModel.find().exec();
  }
  async find(id: string): Promise<Test> {
    return await this.testModel
      .findOne({ stdid: id }, { _id: 0, __v: 0 })
      .exec();
  }
  async delete(id: string): Promise<Test> {
    return await this.testModel.findOneAndDelete({ stdid: id }).exec();
  }
}
