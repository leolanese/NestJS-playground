import {Module} from '@nestjs/common';
import {ProductService} from 'src/services/c.service';
import {CoffeesController} from './c.controller';

@Module({
    controllers: [CoffeesController],
    providers: [ProductService],

})
export class CModule {}
