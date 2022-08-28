import { Response, NextFunction } from 'express';
import UserAddressService from '../services/address.service';
import { Address } from '../interfaces/address.interface';
import { AuthRequest } from '../interfaces/auth.interface';

export default class AddressController {

  private UserAddressService = new UserAddressService();

  public addAddress = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    try {
      const addressData: Address = req.body;
      await this.UserAddressService.createAddress(userId, addressData);
      return res
        .status(201)
        .json({
          status: 'success',
          message: 'address saved successfully'
        })
    } catch (error) {
      next(error)
    }
  }
}