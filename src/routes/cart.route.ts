import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import CartController from '../controllers/cart.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import { addToCartValidation } from '../validations/cart.validation';

export default class CartRoute implements Route {
  public path = '/cart';
  public router = Router();
  private CartController = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .post(authMiddleware, validationMiddleware(addToCartValidation), this.CartController.addToCart);
  }
}