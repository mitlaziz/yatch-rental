import { Test, TestingModule } from '@nestjs/testing';
import { YatchBatchController } from './yatch-batch.controller';
import { YatchBatchService } from './yatch-batch.service';

describe('YatchBatchController', () => {
  let yatchBatchController: YatchBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [YatchBatchController],
      providers: [YatchBatchService],
    }).compile();

    yatchBatchController = app.get<YatchBatchController>(YatchBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(yatchBatchController.getHello()).toBe('Hello World!');
    });
  });
});
