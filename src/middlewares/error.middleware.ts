import { Request, Response, NextFunction } from 'express';
import errorHandler from '../utils/handlers/error.handler';

function errorMiddleware(
  error: errorHandler,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';
  res
    .status(status)
    .json({
      status: 'fail',
      message
    })
}

export default errorMiddleware;