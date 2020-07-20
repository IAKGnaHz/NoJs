import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/function.middleware'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 新增全局中间件
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
