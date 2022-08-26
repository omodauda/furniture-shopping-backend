import { Router } from 'express';
import UserController from '../controllers/user.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import { signUpValidationSchema } from '../validations/user.validation';

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
      .post(validationMiddleware(signUpValidationSchema), this.UserController.signUp);

    this.router
      .route(`${this.path}/login`)
      .post(this.UserController.login);
  }
}