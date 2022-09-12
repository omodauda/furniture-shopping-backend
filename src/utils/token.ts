import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { TokenPayload, TokenData } from '../interfaces/auth.interface';

export const signToken = (user: User): TokenData => {
  const payload: TokenPayload = { id: user.id };
  const secretKey = process.env.JWT_SECRET;
  const expiresIn: number = 60 * 60 * 240;

  const token = jwt.sign(payload, secretKey as jwt.Secret, { expiresIn })
  return { token, expiresIn }
}