import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UserMiddlewareMiddleware } from './middlewares/user-middleware/user-middleware.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //We can also use multiple middlewares
    //For UsersController => different configurations can be passed
    consumer.apply(UserMiddlewareMiddleware).forRoutes(UsersController)
  }
}
