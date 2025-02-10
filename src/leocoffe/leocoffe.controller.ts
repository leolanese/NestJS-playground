import {Body,Controller,Delete,Get,Param,Patch,Query,Res} from '@nestjs/common';
import {ProductService} from 'src/services/c.service';

@Controller('leocoffe')
export class LeocoffeController {

  constructor(private readonly productService: ProductService){}
  // Always define specific routes before dynamic routes to avoid conflicts

  // Root route
  // localhost:3000/leocoffe
  // @Get()
  // getOne() {
  //   return `find something`
  // }

  // Specific route
  // localhost:3000/leocoffe/getall
  @Get('getall')
  getall() {
    return this.productService.getAll()
  }

  // Specific route
  @Get('404')
  findAllResponse(@Res() response: any){
    response.status(404).send(`this action return 404`)
  }

  // query parameters (pagination)
  // localhost:3000/leocoffe/getall/?limit=5&offset=10
  // @Get('getall1')
  // getAll1(@Query() paginationQuery){
  //   const { limit, offset } = paginationQuery;
  //   return `Action return: Limit ${limit}, offset: ${offset}` 
  // }

  // query parameters (pagination)
  // localhost:3000/leocoffe/getall2/
  @Get('getall2')
  getAll(@Query() paginationQuery){
    return this.productService.getAll()
  }

  // Dynamic route
  // localhost:3000/leocoffe/abc
  // @Get(':id')
  // findOne(@Param('id') id: string)  {
  //   return `find one #${id}`
  // }
  
  // 
  // @Get(':id')
  // getOne(@Param('id') id: string) {
  //   return this.productService.getOne(id)
  // }

  @Get(':id')
  mayBeGetOne(@Param('id') id: string) {
    return this.productService.mayGetOne(id);
  }
 
  // localhost:3000/leocoffe
  // @Post()
  // createBody(@Body() body) {
  //   return body
  // }

  // localhost:3000/leocoffe/flavors
  // @Post('flavors')
  // createBodyString(@Body('flavors') body) {
  //   return body
  // }

  // localhost:3000/leocoffe/flavors
  // @Post('httpEnumGone')
  // @HttpCode(HttpStatus.GONE)
  // createBodyStringWithHttpStatus(@Body() body) {
  //   return body
  // }

  // @Post()
  createBody2(@Body() body) {
    return this.productService.create(body)
  }


  // localhost:3000/leocoffe/flavors
  // @Patch(':id')
  // update(@Param('id') id, @Body() body){
  //   return `udpated #${id}`
  // }

  @Patch(':id')
  update(@Param('id') id, @Body() body){
    return this.productService.update(id, body)
  }

  // @Delete(':id')
  // delete(@Param('id') id: string){
  //   return `deleted #${id}`
  // }


  // localhost:3000/leocoffe/1
  @Delete(':id')
  delete2(@Param('id') id: string){
    return this.productService.delete(id)
  }

}

// TEST 
// GET
// localhost:3000/leocoffe/1
// localhost:3000/leocoffe/all
// DELETE
// localhost:3000/leocoffe/1

// VALIDATE
// GET
// localhost:3000/leocoffe/1
