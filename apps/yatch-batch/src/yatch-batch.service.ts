import { Injectable } from '@nestjs/common';

@Injectable()
export class YatchBatchService {
  getHello(): string {
    return 'Welcome to Yatch BATCH Server!';
  }
}
