import { NestFactory } from '@nestjs/core';
import { YatchBatchModule } from './yatch-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(YatchBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
