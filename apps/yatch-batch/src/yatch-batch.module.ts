import { Module } from '@nestjs/common';
import { YatchBatchController } from './yatch-batch.controller';
import { YatchBatchService } from './yatch-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [YatchBatchController],
  providers: [YatchBatchService],
})
export class YatchBatchModule {}
