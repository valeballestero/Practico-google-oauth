import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  console.log(' Servidor corriendo en http://localhost:3000');
  console.log('Iniciar login con Google en: http://localhost:3000/auth/google');
}
bootstrap();
