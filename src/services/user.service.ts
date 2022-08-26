import { User, PrismaClient } from '@prisma/client';


export default class UserService {
  public users = new PrismaClient().user;

  public async createUser(email: string, password: string, fullName: string): Promise<User> {
    return await this.users.create({
      data: {
        email,
        password,
        fullName
      },
    })
  }
}