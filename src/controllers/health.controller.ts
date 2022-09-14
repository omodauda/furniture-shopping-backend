import { Request, Response, NextFunction } from 'express';

export default class HealthCheckController {
  public checkHealth = async (req: Request, res: Response, next: NextFunction) => {
    return res
      .status(200)
      .send('ok')
  }
}