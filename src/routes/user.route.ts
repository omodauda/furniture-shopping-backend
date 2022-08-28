import { Router } from 'express';
import UserController from '../controllers/user.controller';
import AddressController from '../controllers/address.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import { signUpValidationSchema } from '../validations/user.validation';
import authMiddleware from '../middlewares/auth.middleware';

export default class UserRoute implements Route {
  public path = '/user';
  public router = Router();
  private UserController = new UserController();
  private AddressController = new AddressController();

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

    this.router
      .route(`${this.path}/address`)
      .post(authMiddleware, this.AddressController.addAddress)
  }
}