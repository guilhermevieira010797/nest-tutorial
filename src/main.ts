import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * @description Bootstrap (Start) the application in determinated port
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
