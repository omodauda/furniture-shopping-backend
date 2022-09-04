import { Response, NextFunction } from 'express';
import OrderService from '../services/order.service';
import { AuthRequest } from '../interfaces/auth.interface';
import { Order } from '../interfaces/order.interface';


export default class OrderController {
  private OrderService = new OrderService();

  public createOrder = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const orderData: Order = req.body;
    const { id: userId } = req.user;
    try {
      await this.OrderService.createOrder(userId, orderData);
      return res
        .status(201)
        .json({
          status: 'success',
          message: 'order submitted successfully'
        })
    } catch (error) {
      next(error)
    }
  }
}