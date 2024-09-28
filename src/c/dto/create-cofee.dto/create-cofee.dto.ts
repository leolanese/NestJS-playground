// export class CreateCofeeDto {
//     readonly name: string;
//     readonly brand: string;
//     readonly flavors: string[];
// }

import {IsString} from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
    readonly name: string;

  @IsString()  
    readonly brand: string;
  
  @IsString({ each: true })
    readonly flavors: string[];
}
