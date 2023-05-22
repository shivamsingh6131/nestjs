import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class UserMiddlewareMiddleware implements NestMiddleware {
  use(req: Request, Response: any, next: NextFunction) {
    console.log("middle ware is working...")
    next();
  }
}
