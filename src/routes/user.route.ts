import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Route from '../interfaces/routes.interface';

export default class UserRoute implements Route {
  public path = '/user';
  public router = Router();
  public UserController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}/signup`)
      .post(this.UserController.signUp);
  }
}