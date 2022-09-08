import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';
import { addProductValidation } from '../validations/product.validation';
import { adminOnlyMiddleware, authMiddleware } from '../middlewares/auth.middleware';
import multerImageUpload from '../utils/multer';

export default class ProductRoute implements Route {
  public path = '/product';
  public router = Router();
  private ProductController = new ProductController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route(`${this.path}`)
      .post(
        // validationMiddleware(addProductValidation),
        authMiddleware,
        adminOnlyMiddleware,
        multerImageUpload.array('image'),
        this.ProductController.addProduct
      )
      .get(this.ProductController.getProducts);

    this.router
      .route(`${this.path}/categories`)
      .get(this.ProductController.getProductCategories);

    this.router
      .route(`${this.path}/:id`)
      .get(this.ProductController.getProduct)
  }
}