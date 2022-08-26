import { User, PrismaClient } from '@prisma/client';
import HttpException from '../utils/handlers/error.handler';


export default class UserService {
  public users = new PrismaClient().user;

  public async createUser(email: string, password: string, fullName: string): Promise<User> {
    const existingEmail = await this.users.findUnique({ where: { email } });
    if (existingEmail) throw new HttpException(409, `user with email ${email} already exists`)
    return await this.users.create({
      data: {
        email,
        password,
        fullName
      },
    })
  }
}