import { Test, TestingModule } from '@nestjs/testing';
import { LeocoffeController } from './leocoffe.controller';

describe('LeocoffeController', () => {
  let controller: LeocoffeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeocoffeController],
    }).compile();

    controller = module.get<LeocoffeController>(LeocoffeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
