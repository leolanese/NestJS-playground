import {ValidationPipe} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';
import * as compression from 'compression';
import {AppModule} from './app.module';

async function bootstrap() {
  // `NestFactory` create an application instance
  // `AppModule` is the root module of the application
  const app = await NestFactory.create(AppModule, { snapshot: true });

  app.enableCors({
    origin: 'http://localhost:4200', // Angular dev server URL
    credentials: true,
  });

  // automaticly validate DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // this work on development mode
  app.use(compression());

  await app.listen(3000);
}
bootstrap();
