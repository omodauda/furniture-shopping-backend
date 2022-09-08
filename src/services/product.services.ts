import { PrismaClient, Product, ProductCategory } from '@prisma/client';
import { ProductImage } from '../interfaces/product.interface';


export default class ProductService {

  public product = new PrismaClient().product;
  public category = new PrismaClient().productCategory;
  public productImage = new PrismaClient().productImage;

  public createProduct = async (
    name: string,
    description: string,
    price: number,
    quantity: number,
    productCategoryId: string,
    imageData: ProductImage[]
  ): Promise<void> => {
    const product = await this.product.create({
      data: {
        name,
        description,
        price,
        quantity,
        productCategoryId
      }
    })
    for (const image of imageData) {
      await this.productImage.create({
        data: {
          productId: product.id,
          url: image.url,
          publicId: image.publicId
        }
      })
    }
  }

  public getCategoryNameById = async (id: string): Promise<ProductCategory | null> => {
    return await this.category.findUnique({ where: { id } });
  };

  public getCategories = async (name: any) => {
    return await this.category.findUnique({
      where: {
        name
      },
      include: {
        products: {
          include: {
            images: true
          }
        }
      }
    });
  }

  public getProducts = async (): Promise<Product[]> => {
    return await this.product.findMany();
  }

  public getProductById = async (productId: string): Promise<Product | null> => {
    return await this.product.findUnique({
      where: {
        id: productId
      },
      include: {
        images: true
      }
    })
  }
}