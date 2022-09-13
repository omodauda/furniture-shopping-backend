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

  public async getUserAddress(userId: string): Promise<Address[]> {
    return await this.address.findMany({
      where: {
        userId
      },
      orderBy: [
        {
          createdAt: 'desc'
        }
      ]
    });
  }

  public async setDefaultAddress(userId: string, addressId: string): Promise<Address> {
    const previousDefault = await this.address.findFirst({
      where: {
        userId,
        isDefault: true
      }
    });
    if (previousDefault) {
      await this.address.update({
        where: {
          id: previousDefault.id
        },
        data: {
          isDefault: false
        }
      })
    }
    return await this.address.update({
      where: {
        id: addressId,
      },
      data: {
        isDefault: true
      }
    });
  }
}