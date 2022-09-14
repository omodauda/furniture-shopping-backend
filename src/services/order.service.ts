import HttpException from '../utils/handlers/error.handler';
import { Order as IOrder } from '../interfaces/order.interface';
import prisma from '../lib/prisma';
import { Order } from '@prisma/client';


export default class OrderService {
  public order = prisma.order;
  public orderItem = prisma.orderItem;
  public userAddress = prisma.userAddress;
  public prisma = prisma;

  public createOrder = async (userId: string, orderData: IOrder, orderNo: number): Promise<void> => {
    const validUserAddress = await this.userAddress.findUnique({
      where: {
        id: orderData.deliveryAddressId,
      }
    });
    if (!validUserAddress) {
      throw new HttpException(400, 'invalid user address')
    }
    if (validUserAddress.userId !== userId) {
      throw new HttpException(401, 'address does not belong to this user');
    }

    const orderRecord = await this.order.create({
      data: {
        userId,
        deliveryAddressId: orderData.deliveryAddressId,
        total: orderData.total,
        orderNo
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

  public getUserOrders = async (userId: string, status: string): Promise<Order[]> => {
    if (status !== 'Processing' && status !== 'Cancelled' && status !== 'Delivered') {
      throw new HttpException(400, 'invalid query param')
    }
    return await this.order.findMany({
      where: {
        userId,
        status
      },
      include: {
        orderItems: true
      }
    })
  }
}