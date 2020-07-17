import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: Function) {
//     console.log('Request...');
//     next();
//   }
// }

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request,res: Response, next: Function) {
        console.log("Request...",req.headers,req.ip,'Bodying!!!!====>',req.body)
        next();
    }
}