import {Injectable,NotFoundException} from '@nestjs/common';
import {Product} from './entities/c.entity';


@Injectable() // Marks this class as a provider
export class ProductService {
    private products: Product[] = [
        {
          id: 1,
          name: 'Leo',
          brand: 'Nike',
          flavors: ['dulce de leche', 'banana split']
        }
    ];

    getAll() {
      return this.products;
    }

    getOne(id: string) {
      return this.products.find(item => item.id === +id);
    }

    mayGetOne(id: string) {
      const product = this.products.find(item => item.id === +id);

      if (!product) {
        throw new NotFoundException(`The Coffee #${id} not found`);
      }
      return product;
    }

    create(createCoffeeDto: any) {
      this.products.push(createCoffeeDto);
      return createCoffeeDto;
    }   

    update(id: string, updateCoffeeDto: any) {
        const existingCoffee = this.getOne(id);
        if (existingCoffee) {
            // update the existing entity
        }
    }
    
    delete(id: string) {
        const productIndex = this.products.findIndex(item => item.id === +id);
        if (productIndex >= 0) {
            this.products.splice(productIndex, 1);
            return true; // Successfully deleted
        }
        return false; // Product not found
    }
    
}
