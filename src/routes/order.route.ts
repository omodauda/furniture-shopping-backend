import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import OrderController from '../controllers/order.controller';
import validationMiddleware from '../middlewares/validation.middleware';
import { orderValidation } from '../validations/order.validation';
import { authMiddleware } from '../middlewares/auth.middleware';

export default class OrderRoute implements Route {
  public path = '/order';
  public router = Router();
  private OrderController = new OrderController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .get(authMiddleware, this.OrderController.getUserOrders)
      .post(authMiddleware, validationMiddleware(orderValidation), this.OrderController.createOrder)
  }
}