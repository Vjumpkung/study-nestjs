import { IsString, isString } from 'class-validator';

export class CreateTestDto {
  @IsString()
  name: string;
  @IsString()
  stdid: string;
}
