import { Request, Response, RequestHandler, NextFunction } from 'express';
import HttpException from '../utils/handlers/error.handler';
// import UserService from '../services/user.service';

export default class UserController {

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