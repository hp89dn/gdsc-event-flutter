import {
  Injectable,
  NestMiddleware,
  Req,
  Res,
  Next,
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
    const { refDoc } = req.session;
    if (!refDoc) throw new UnauthorizedException('not logged in');
    const user = await this.authService.validateById(refDoc).catch(() => {
      throw new UnauthorizedException('invalid user');
    });
    req.user = user;
    next();
  }
}
