import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // This is a simple GET endpoint that returns a string
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
