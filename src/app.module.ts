import {Module} from '@nestjs/common';
import {ConfigModule,ConfigService} from '@nestjs/config';
import {DevtoolsModule} from '@nestjs/devtools-integration';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CModule} from './c/c.module';
import {CoffeeService} from './services/c.service';
import {TestController} from './test/test.controller';
import { ProductsModule } from './products/products.module';
import { LeocoffeController } from './leocoffe/leocoffe.controller';

@Module({
  imports: [
    CModule,
    ConfigModule.forRoot({
      isGlobal: true,  // Makes ConfigModule available app-wide
    }),
    TypeOrmModule.forRootAsync({ // Database Connection Configuration
      useFactory: async () => {
        const configService = new ConfigService();
         return { 
            type: 'postgres',
            host: configService.get('POSTGRES_HOST'),
            port: configService.get('POSTGRES_PORT'),
            username: configService.get('POSTGRES_USER'),
            password: configService.get('POSTGRES_PASSWORD'),
            database: configService.get('POSTGRES_DATABASE'),
            autoLoadEntities: true,
            entities: [],
            synchronize: true,
            logging: ['query', 'error'], // Enable query and error logging
         }
       }    
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    ProductsModule,
  ],
  controllers: [AppController, TestController, LeocoffeController],
  providers: [AppService, CoffeeService],
})
export class AppModule {}
