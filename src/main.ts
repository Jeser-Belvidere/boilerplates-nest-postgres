import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      //NOTE: returns 400 error if body not maches with DTO
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        //transforms objects how described in dto
        enableImplicitConversion: true,
      },
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Nest Template')
    .setDescription('Nest template application')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(process.env.APP_PORT || '3000', 10), () => {
    console.log(`APP HAS BEEN STARTED ON PORT ${process.env.APP_PORT}`);
  });
}

bootstrap();
