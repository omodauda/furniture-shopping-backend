import { Request, Response, NextFunction, RequestHandler } from 'express';
import { Schema } from 'joi';

export default function validationMiddleware(schema: Schema): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req.body);
    if (result.error) {
      const error = result.error.details[0].message;
      return res
        .status(400)
        .json({
          status: 'fail',
          error
        });
    }
    next()
  }
}