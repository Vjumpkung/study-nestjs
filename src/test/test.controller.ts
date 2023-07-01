import { Controller, Post, Get, Body, Delete, Param } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly TestService: TestService) {}
  @Post('create')
  async create(@Body() createTestDto: CreateTestDto) {
    const newTest = await this.TestService.create(createTestDto);
    return newTest;
  }
  @Get('findAll')
  async findAll() {
    return await this.TestService.findAll();
  }
  @Get('find/:stdid')
  async find(@Param('stdid') stdid: string) {
    const test = await this.TestService.find(stdid);
    return test;
  }
  @Delete('delete/:stdid')
  async delete_req(@Param('stdid') stdid: string) {
    const test = await this.TestService.delete(stdid);
    return { status: 'Delete Suscessful', data: test };
  }
}
