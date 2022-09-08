import { Address } from '../interfaces/address.interface';
import prisma from '../lib/prisma';

export default class UserAddressService {
  public address = prisma.userAddress;

  public async createAddress(userId: string, addressData: Address): Promise<void> {
    const { fullName, address, country, postalCode, city } = addressData;
    await this.address.create({
      data: {
        userId,
        fullName,
        address,
        country,
        postalCode,
        city
      }
    });
  }
}