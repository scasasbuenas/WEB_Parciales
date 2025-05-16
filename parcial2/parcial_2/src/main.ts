import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
    defaultVersion: '1',
  });
  const port = 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/api/v1`);

  app.useGlobalPipes(new ValidationPipe());
}
bootstrap();
