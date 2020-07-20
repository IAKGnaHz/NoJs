import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './middleware/function.middleware'
import { AllExceptionsFilter } from './error/all-exceptions.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 新增全局中间件
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.use(logger);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
