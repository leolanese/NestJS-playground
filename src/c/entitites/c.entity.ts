import {Entity} from 'typeorm';

@Entity( ) // sql table === 'c'
export class C {
  id: number;
  name: string;
  price: number;
  flavors: string[];
}
