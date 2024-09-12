import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.ts';
import { ConfigService } from '@nestjs/config';
import * as morgan from 'morgan';
import { corsOptions } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.use(morgan('dev'));
  app.enableCors(corsOptions);
  app.setGlobalPrefix('api');
  await app.listen(configService.get('PORT'));
}
bootstrap();
