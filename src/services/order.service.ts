import { Order } from '../interfaces/order.interface';
import prisma from '../lib/prisma';

export default class OrderService {
  public order = prisma.order;
  public orderItem = prisma.orderItem;
  public prisma = prisma;

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