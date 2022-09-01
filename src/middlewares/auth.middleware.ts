import { NextFunction, Response, Request } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import HttpException from '../utils/handlers/error.handler';
import { TokenPayload, AuthRequest } from '../interfaces/auth.interface';

async function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return next(new HttpException(401, 'Unauthorized'));
  }
  const token = authorization.split('Bearer ')[1].trim();

  try {
    const { id: userId } = (jwt.verify(token, process.env.JWT_SECRET as jwt.Secret)) as TokenPayload;

    const users = new PrismaClient().user;
    const user = await users.findUnique({ where: { id: userId } })
    if (!user) {
      return next(new HttpException(401, 'Unauthorized'))
    }
    req.user = user;
    return next();
  } catch (error: any) {
    return next(new HttpException(401, error.message))
  }

}

async function adminOnlyMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const { isAdmin } = req.user;
  if (!isAdmin) {
    return next(new HttpException(401, 'You do not have permission to perform this action'))
  } else {
    next()
  }
}

export { authMiddleware, adminOnlyMiddleware };
