import { User } from '@prisma/client';
import HttpException from '../utils/handlers/error.handler';
import bcrypt from 'bcrypt';
import { UserProfile } from '../interfaces/user.interface';
import prisma from '../lib/prisma';


export default class UserService {
  public users = prisma.user;

  public async createUser(email: string, password: string, fullName: string): Promise<User> {
    const existingEmail = await this.users.findUnique({ where: { email } });
    if (existingEmail) throw new HttpException(409, `user with email ${email} already exists`);

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.users.create({
      data: {
        email,
        password: hashedPassword,
        fullName
      },
    })
  }

  public async login(email: string, password: string): Promise<User> {
    const existingUser = await this.users.findUnique({ where: { email } });
    if (!existingUser) throw new HttpException(409, 'invalid email/password');

    const isValidPassword: boolean = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) throw new HttpException(401, 'invalid email/password');

    return existingUser;
  }

  public async getProfile(userId: string): Promise<UserProfile> {
    const profile = await this.users.findUnique({
      where: {
        id: userId,
      },
      select: {
        fullName: true,
        email: true,
        photo: true,
        addresses: {
          select: {
            id: true,
            fullName: true,
            address: true,
            postalCode: true,
            country: true,
            city: true
          }
        }
      }
    });
    return profile!;
  }
}