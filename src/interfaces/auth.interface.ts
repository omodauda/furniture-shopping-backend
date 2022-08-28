import { Request } from 'express';

export interface TokenPayload {
  id: string;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface Token {
  id: string;
  expiresIn: number
}

export interface AuthRequest extends Request {
  user?: any;
}