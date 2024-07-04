import { NestFactory } from '@nestjs/core';
import { YatchBatchModule } from './yatch-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(YatchBatchModule);
  await app.listen(3000);
}
bootstrap();
