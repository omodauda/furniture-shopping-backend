import { CartItem } from '../interfaces/cart.item.interface';
import prisma from '../lib/prisma';
import HttpException from '../utils/handlers/error.handler';

export default class CartService {
  public cartItem = prisma.cartItem;

  public addToCart = async (userId: string, cartItemData: CartItem): Promise<CartItem> => {
    const existingCartItem = await this.cartItem.findFirst({
      where: {
        userId,
        productId: cartItemData.productId,
      }
    });
    if (existingCartItem) {
      throw new HttpException(400, 'item already in cart')
    }
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
        id: true,
        quantity: true,
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

  public getCartItem = async (id: string): Promise<CartItem | null> => {
    return await this.cartItem.findUnique({
      where: {
        id,
      }
    })
  }

  public removeFromCart = async (id: string): Promise<CartItem> => {
    return await this.cartItem.delete({
      where: {
        id,
      }
    })
  }

  public updateCartItem = async (id: string, quantity: number): Promise<CartItem> => {
    return await this.cartItem.update({
      where: {
        id,
      },
      data: {
        quantity
      }
    })
  }
}