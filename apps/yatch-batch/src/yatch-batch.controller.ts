import { Controller, Get } from '@nestjs/common';
import { YatchBatchService } from './yatch-batch.service';

@Controller()
export class YatchBatchController {
  constructor(private readonly yatchBatchService: YatchBatchService) {}

  @Get()
  getHello(): string {
    return this.yatchBatchService.getHello();
  }
}
