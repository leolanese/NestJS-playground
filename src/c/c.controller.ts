import {Body,Controller,Delete,Get,HttpCode,HttpStatus,Param,Patch,Post} from '@nestjs/common';
import {join} from 'path';
import {Worker} from 'worker_threads';
import {CoffeeService} from '../services/c.service';
import {CreateCoffeeDto} from './dto/create-cofee.dto/create-cofee.dto';
import {UpdateCoffeeDto} from './dto/udpate-cofee.dto/udpate-cofee.dto';

@Controller('coffees')
export class CoffeesController {
    
    constructor(private   coffeeService: CoffeeService) {}

    // @Get()  
    // findAll(@Query() paginationQuery) {
    //     return this.coffeeService.findAll();
    // }


    // @Get(':id')
    // mayBeFindOne(@Param('id') id: string) {
    //     return this.coffeeService.mayBeFindOne(id);
    // }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto ) {
      console.log(createCoffeeDto instanceof CreateCoffeeDto);
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
    }

    @Delete(':id') 
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id);
    }

    @Get('worker')
    async getHello(): Promise<string> {
      return new Promise((resolve, reject) => {
        // Correct the worker file path
        const worker = new Worker(join(__dirname, './../worker.js'));
    
        // Handle worker messages
        worker.on('message', (message) => {
          console.log(`Main thread received message: ${message}`);
          resolve(message);
        });
    
        // Handle worker errors
        worker.on('error', (err) => {
          console.error('Worker error:', err);
          reject(err);
        });
    
        // Handle worker exit
        worker.on('exit', (code) => {
          if (code !== 0) {
            reject(new Error(`Worker stopped with exit code ${code}`));
          }
        });
    
        // Send message to the worker
        worker.postMessage('Hello from main thread!');
      });
    }

    // @Get()
    // findCoffees(@Res() response) {
    //     response.status(200).send(`Using @Res() decorator`);
    // }  

    // @Get('something')
    // findSomething() {
    //     return 'This action returns something coffees';
    // }  

    @Get(':id')
    findOne(@Param('id') id: string) {
      console.log(typeof id);
      return this.coffeeService.findOne(id);
    }
    
    // @Get(':id')
    // findOne2(@Param('id') id: string) {
    //     return `This action returns a #${id} coffee`;
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return 'This action returns a #coffee';
    // }

    // @Post()
    // create(@Body() body) {  
    //     return `POST: name and brand #${body.name + ' ' + body.brand}`;
    // }

    // @Post('postsomething')
    // create2(@Body('brand') brand: string) {
    //     return `POST: brand #${brand}`;
    // }

    // wild card route
    @Post()
    @HttpCode(HttpStatus.GONE)
    create3(@Body() body) {
        return body;
    }   

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() body) {
    //     return `POST: action UPDATES a #${id} coffee`;
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `POST: action REMOVES a #${id} coffee`;
    // }




}
