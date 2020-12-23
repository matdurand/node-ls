import { NestFactory } from '@nestjs/core';
import { LsModule } from './ls.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(LsModule);

  const options = new DocumentBuilder()
    .setTitle('Ls example')
    .setDescription('A very unsafe api to list folder content on the server')
    .setVersion('0.1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/', app, document);

  console.log('LsApi listening on port ', process.env.PORT || 3000);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
