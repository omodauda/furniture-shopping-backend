import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import HealthCheckController from '../controllers/health.controller';

export default class UserRoute implements Route {
  public path = '/health';
  public router = Router();
  private HealthCheckController = new HealthCheckController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .get(this.HealthCheckController.checkHealth)


  }
}