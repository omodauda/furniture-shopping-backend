import { PrismaClient } from '@prisma/client';
import { Order } from '../interfaces/order.interface';

export default class OrderService {
  public order = new PrismaClient().order;
  public orderItem = new PrismaClient().orderItem;
  public prisma = new PrismaClient();

  public createOrder = async (userId: string, orderData: Order): Promise<void> => {
    const orderRecord = await this.order.create({
      data: {
        userId,
        total: orderData.total,
      }
    });
    const orderItemRequests = orderData.orders.map(order => {
      return this.orderItem.create({
        data: {
          orderId: orderRecord.id,
          productId: order.productId,
          quantity: order.quantity
        }
      })
    })
    await Promise.all(orderItemRequests);
  }
}