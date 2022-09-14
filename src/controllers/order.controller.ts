import { Response, NextFunction, query } from 'express';
import OrderService from '../services/order.service';
import { AuthRequest } from '../interfaces/auth.interface';
import { Order } from '../interfaces/order.interface';


export default class OrderController {
  private OrderService = new OrderService();

  public createOrder = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const orderData: Order = req.body;
    const { id: userId } = req.user;
    try {
      const orderNo = await this.generateOrderNo();
      await this.OrderService.createOrder(userId, orderData, orderNo);
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

  public getUserOrders = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    const { status } = req.query;
    try {
      const orders = await this.OrderService.getUserOrders(userId, status as string);
      return res
        .status(200)
        .json({
          status: 'success',
          data: orders
        })
    } catch (error) {
      next(error)
    }
  }

  public generateOrderNo = async (): Promise<number> => {
    const min = 100000000;
    const max = 999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}