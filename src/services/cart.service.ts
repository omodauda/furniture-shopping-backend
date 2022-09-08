import { CartItem } from '../interfaces/cart.item.interface';
import prisma from '../lib/prisma';

export default class CartService {
  public cartItem = prisma.cartItem;

  public addToCart = async (userId: string, cartItemData: CartItem): Promise<CartItem> => {
    return await this.cartItem.create({
      data: {
        userId,
        productId: cartItemData.productId,
        quantity: cartItemData.quantity
      }
    })
  }

  public getUserCart = async (userId: string) => {
    return await this.cartItem.findMany({
      where: {
        userId,
      },
      select: {
        product: {
          select: {
            id: true,
            name: true,
            description: true,
            images: true,
            price: true,
            quantity: true,
          }
        }
      },
    })
  }
}