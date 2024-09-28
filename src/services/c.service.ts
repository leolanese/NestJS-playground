import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Coffeee } from './entities/c.entity';


@Injectable() // Marks this class as a provider
export class CoffeeService {
    private coffees: Coffeee[] = [
        {
            id: 1,
            name: 'Black Coffee',
            brand: 'Starbucks',
            flavors: ['vanilla', 'caramel', 'mocha']
        }
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(item => item.id === +id);
    }

    mayBeFindOne(id: string) {
        const coffee = this.coffees.find(item => item.id === +id);
        if (!coffee) {
            throw new HttpException(`The Coffee #${id} not found`, HttpStatus.NOT_FOUND);
        }
        return coffee;
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }   

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            // update the existing entity
        }
    }
    
    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
    
}
