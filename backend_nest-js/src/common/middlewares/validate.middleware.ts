import {
  Injectable,
  NestMiddleware,
  Req,
  Next,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class VaidateMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  async use(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    const { user_id } = req.session;
    if (!user_id) throw new UnauthorizedException('not logged in');
    const user = await this.authService.validateById(user_id).catch(() => {
      throw new UnauthorizedException('invalid user');
    });

    req.user = user;
    next();
  }
}
