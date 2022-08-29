import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


// to run and make nest js project -
// 1. cmd to use nest cli - npm i -g nestjs/cli    -- i = install , -g = global(add to all projects)
// 2. make new projetc - nest new project-name
// 3. add controller - nest g controller products -- products for our app --> g means generate here