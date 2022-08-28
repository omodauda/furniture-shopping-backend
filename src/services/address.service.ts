import { PrismaClient } from '@prisma/client';
import { Address } from '../interfaces/address.interface'

export default class UserAddressService {
  public address = new PrismaClient().userAddress;

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