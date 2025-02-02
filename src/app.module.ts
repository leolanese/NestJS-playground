import {Module} from '@nestjs/common';
import {DevtoolsModule} from '@nestjs/devtools-integration';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {CModule} from './c/c.module';
import {CoffeeService} from './services/c.service';
import {TestController} from './test/test.controller';

@Module({
  imports: [
    CModule,
    TypeOrmModule.forRoot({ // Database Connection Configuration
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query', 'error'], // Enable query and error logging
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [AppController, TestController],
  providers: [AppService, CoffeeService],
})
export class AppModule {}
