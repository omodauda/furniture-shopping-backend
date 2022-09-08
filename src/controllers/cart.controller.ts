import { Response, NextFunction } from 'express';
import { AuthRequest } from '../interfaces/auth.interface';
import CartService from '../services/cart.service';
import { CartItem } from '../interfaces/cart.item.interface';


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
}