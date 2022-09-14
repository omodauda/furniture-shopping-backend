import { User } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import { signToken } from '../utils/token';
import { AuthRequest } from '../interfaces/auth.interface';

export default class UserController {

  private UserService = new UserService();

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const { email, password, fullName } = req.body;
      await this.UserService.createUser(email, password, fullName);
      return res
        .status(201)
        .json({
          status: 'success',
          message: 'user successfully registered'
        })
    } catch (error) {
      next(error);
    }
  }

  public login = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    try {
      const { email, password } = req.body;
      const user: User = await this.UserService.login(email, password);
      const { token } = signToken(user);
      return res
        .status(200)
        .json({
          status: 'success',
          message: 'user login successful',
          token,
          data: user
        })
    } catch (error) {
      next(error)
    }
  }

  public profile = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    try {
      const { fullName, email, photo, addresses, orders } = await this.UserService.getProfile(userId);
      const data = {
        fullName,
        email,
        photo,
        addresses: addresses.length,
        orders: orders.length
      }
      return res
        .status(200)
        .json({
          status: 'success',
          data
        })
    } catch (error) {
      next(error)
    }
  }
}