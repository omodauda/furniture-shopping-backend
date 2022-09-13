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

  public getUserAddress = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    try {
      const address = await this.UserAddressService.getUserAddress(userId);
      return res
        .status(200)
        .json({
          status: 'success',
          data: address
        })
    } catch (error) {
      next(error)
    }
  }

  public setDefaultAddress = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { id: userId } = req.user;
    const { id: addressId } = req.params;
    try {
      await this.UserAddressService.setDefaultAddress(userId, addressId);
      return res
        .status(200)
        .json({
          status: 'success',
          message: 'default address set successfully'
        })
    } catch (error) {
      next(error)
    }
  }
}