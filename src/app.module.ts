import { Module , NestModule, MiddlewareConsumer, Request, RequestMethod} from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware'
import { logger } from './middleware/function.middleware'
import { UserModule } from './user/user.module'
import { AppController } from './app.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service'
import { AppService } from './app.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
// 配置使用 中间件作为输出
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      // .apply(LoggerMiddleware)
      .forRoutes('user')
  }
}
