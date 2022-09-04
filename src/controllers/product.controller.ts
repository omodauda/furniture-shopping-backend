import { Response, NextFunction } from 'express';
import ProductService from '../services/product.services';
import { ProductImage } from '../interfaces/product.interface';
import { FormRequest } from '../interfaces/request.interface';
import Cloudinary from '../utils/cloudinary';
import HttpException from '../utils/handlers/error.handler';

export default class ProductController {

  private ProductService = new ProductService();
  private Cloudinary = new Cloudinary();

  public addProduct = async (req: FormRequest, res: Response, next: NextFunction): Promise<Response | void> => {
    const { name, description, price, quantity, productCategoryId } = req.body;
    try {
      if (!req.files.length || !Array.isArray(req.files)) {
        throw new HttpException(400, 'no image file selected')
      };
      const images = req.files;
      const folder = await this.getCloudFolder(productCategoryId);
      const imageData: ProductImage[] = [];
      for (const image of images) {
        const { public_id, secure_url } = await this.Cloudinary.uploadImage(image, folder);
        imageData.push({ publicId: public_id, url: secure_url });
      };
      await this.ProductService.createProduct(name, description, price, Number(quantity), productCategoryId, imageData);
      return res
        .status(201)
        .json({
          status: 'success',
          message: 'product created successfully'
        })
    } catch (error) {
      next(error)
    }
  }

  public getCloudFolder = async (productCategoryId: string): Promise<string | undefined> => {
    const category = await this.ProductService.getCategoryNameById(productCategoryId);
    let folderName: string;
    switch (category?.name) {
      case 'Chair':
        folderName = 'Chair'
        break;
      case 'Table':
        folderName = 'Table'
        break;
      case 'Arm Chair':
        folderName = 'Arm%20chair'
        break;
      case 'Bed':
        folderName = 'Bed'
        break;
      case 'Lamp':
        folderName = 'Lamp'
        break;
      default:
        folderName = 'New'
        break;
    };
    return folderName;
  }
}