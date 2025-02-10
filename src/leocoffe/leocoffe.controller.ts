import {Body,Controller,Delete,Get,HttpCode,HttpStatus,Param,Patch,Post,Query,Res} from '@nestjs/common';

@Controller('leocoffe')
export class LeocoffeController {
  // Always define specific routes before dynamic routes to avoid conflicts

  // Root route
  // localhost:3000/leocoffe
  @Get()
  findSomething()  {
    return `find something`
  }

  // Specific route
  // localhost:3000/leocoffe/sugar
  @Get('sugar')
  findAll() {
    return 'All the coffees'
  }

  // Specific route
  @Get('404')
  findAllResponse(@Res() response: any){
    response.status(404).send(`this action return 404 `)
  }

  // query parameters
  // localhost:3000/leocoffe/qp/?limit=5&offset=10
  @Get('qp')
  findAllWithQueryParams(@Query() paginationQuery){
    const { limit, offset } = paginationQuery;
    return `Action return: Limit ${limit}, offset: ${offset}` 
  }

  // Dynamic route
  // localhost:3000/leocoffe/abc
  @Get(':id')
  findOne(@Param('id') id: string)  {
    return `find one #${id}`
  }




  // localhost:3000/leocoffe
  @Post()
  createBody(@Body() body) {
    return body
  }

  // localhost:3000/leocoffe/flavors
  @Post('flavors')
  createBodyString(@Body('flavors') body) {
    return body
  }

  // localhost:3000/leocoffe/flavors
  @Post('httpEnumGone')
  @HttpCode(HttpStatus.GONE)
  createBodyStringWithHttpStatus(@Body() body) {
    return body
  }

  // localhost:3000/leocoffe/flavors
  @Patch(':id')
  update(@Param('id') id, @Body() body){
    return `udpated #${id}`
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return `deleted #${id}`
  }

}


