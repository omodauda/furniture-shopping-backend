import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/product.services';
import { ProductData } from '../interfaces/product.interface';

export default class ProductController {

  private ProductService = new ProductService();

  public addProduct = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const product: ProductData = req.body;
    console.log(product);
    // try {
    //   await this.ProductService.createProduct(product);
    //   return res
    //     .status(201)
    //     .json({
    //       status: 'success',
    //       message: 'product created successfully'
    //     })
    // } catch (error) {
    //   next(error)
    // }
  }
}