import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';

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

  // static async signUp(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response | void> {
  //   try {
  //     const { email, password, full_name } = req.body;
  //     const user = await UserService.createUser(email, password, full_name);
  //     return res
  //       .status(200)
  //       .json({
  //         status: 'success',
  //         message: 'user created successfully',
  //         data: user
  //       })
  //   } catch (error: any) {
  //     console.log(error)
  //     next(new HttpException(500, error.message))
  //   }
  // }
}