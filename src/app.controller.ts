import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

interface MessageDto {
  name: string
  age: number
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createMessage(@Body() message: MessageDto){  
    return this.appService.createMessage(message);
  }

  @Get()
  getAll(): any {
    return this.appService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.appService.findOne(id);
  }
}
