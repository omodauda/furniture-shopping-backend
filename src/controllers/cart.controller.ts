import { Response, NextFunction } from 'express';
import { AuthRequest } from '../interfaces/auth.interface';
import CartService from '../services/cart.service';
import { CartItem } from '../interfaces/cart.item.interface';
import HttpException from '../utils/handlers/error.handler';


export default class CartController {
  private CartService = new CartService();

  public addToCart = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const cartItemData: CartItem = req.body;
    const { id: userId } = req.user;

    try {
      await this.CartService.addToCart(userId, cartItemData);
      return res
        .status(200)
        .json({
          status: 'success',
          message: 'item added to cart successfully'
        })
    } catch (error) {
      next(error)
    }
  }

  public getUserCart = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    try {
      const cart = await this.CartService.getUserCart(userId);
      let total: number = 0;
      for (const item of cart) {
        total = total + (Number(item.product.price) * item.quantity)
      }
      return res
        .status(200)
        .json({
          status: 'success',
          data: {
            total,
            cart
          }
        })
    } catch (error) {
      next(error)
    }
  }

  public removeFromCart = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    const { id: cartItemId } = req.params
    try {
      const item = await this.CartService.getCartItem(cartItemId);
      if (!item) {
        throw new HttpException(400, 'cart item not found')
      }

      if (item.userId !== userId) {
        throw new HttpException(401, 'Unauthorized')
      }
      await this.CartService.removeFromCart(cartItemId);
      return res
        .status(200)
        .json({
          status: 'success',
          message: 'cart item removed successfully'
        })
    } catch (error) {
      next(error)
    }
  }

  public updateCartItem = async (req: AuthRequest, res: Response, next: NextFunction) => {
    const { id: userId } = req.user;
    const { id: cartItemId } = req.params;
    const { quantity } = req.body;

    try {
      const item = await this.CartService.getCartItem(cartItemId);
      if (!item) {
        throw new HttpException(400, 'cart item not found')
      }

      if (item.userId !== userId) {
        throw new HttpException(401, 'Unauthorized')
      }
      await this.CartService.updateCartItem(cartItemId, quantity);
      return res
        .status(200)
        .json({
          status: 'success',
          message: 'cart item updated successfully'
        })
    } catch (error) {
      next(error)
    }
  }
}