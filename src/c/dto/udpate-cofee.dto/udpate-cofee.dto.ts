import {PartialType} from '@nestjs/mapped-types'
import {CreateCoffeeDto} from '../create-cofee.dto/create-cofee.dto'

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
