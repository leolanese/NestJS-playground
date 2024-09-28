import { Module } from '@nestjs/common';
import { CoffeeService } from 'src/services/c.service';
import { CoffeesController } from './c.controller';

@Module({
    controllers: [CoffeesController],
    providers: [CoffeeService],

})
export class CModule {}
