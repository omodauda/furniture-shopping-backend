import { CartItem } from '../interfaces/cart.item.interface';
import prisma from '../lib/prisma';

export default class CartService {
  public cartItem = prisma.cartItem;

  public addToCart = async (userId: string, cartItemData: CartItem) => {
    return await this.cartItem.create({
      data: {
        userId,
        productId: cartItemData.productId,
        quantity: cartItemData.quantity
      }
    })
  }
}