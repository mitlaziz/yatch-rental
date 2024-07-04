import { Module } from '@nestjs/common';
import { YatchBatchController } from './yatch-batch.controller';
import { YatchBatchService } from './yatch-batch.service';

@Module({
  imports: [],
  controllers: [YatchBatchController],
  providers: [YatchBatchService],
})
export class YatchBatchModule {}
