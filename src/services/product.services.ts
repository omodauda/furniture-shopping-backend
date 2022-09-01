import { PrismaClient, Product } from '@prisma/client';
import { ProductData } from '../interfaces/product.interface';


export default class ProductService {

  public product = new PrismaClient().product;

  public createProduct = async (product: ProductData): Promise<Product> => {
    return await this.product.create({
      data: {
        ...product
      }
    })
  }
}