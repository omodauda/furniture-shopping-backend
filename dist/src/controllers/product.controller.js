"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_services_1 = __importDefault(require("../services/product.services"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const error_handler_1 = __importDefault(require("../utils/handlers/error.handler"));
class ProductController {
    constructor() {
        this.ProductService = new product_services_1.default();
        this.Cloudinary = new cloudinary_1.default();
        this.getProductCategories = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.query;
            try {
                const categories = yield this.ProductService.getCategories(name);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data: categories
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.addProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, quantity, productCategoryId } = req.body;
            try {
                if (!req.files.length || !Array.isArray(req.files)) {
                    throw new error_handler_1.default(400, 'no image file selected');
                }
                ;
                const images = req.files;
                const folder = yield this.getCloudFolder(productCategoryId);
                const imageData = [];
                for (const image of images) {
                    const { public_id, secure_url } = yield this.Cloudinary.uploadImage(image, folder);
                    imageData.push({ publicId: public_id, url: secure_url });
                }
                ;
                yield this.ProductService.createProduct(name, description, price, Number(quantity), productCategoryId, imageData);
                return res
                    .status(201)
                    .json({
                    status: 'success',
                    message: 'product created successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.ProductService.getProducts();
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data: products
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log(req.params);
            try {
                const product = yield this.ProductService.getProductById(id);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data: product
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getCloudFolder = (productCategoryId) => __awaiter(this, void 0, void 0, function* () {
            const category = yield this.ProductService.getCategoryNameById(productCategoryId);
            let folderName;
            switch (category === null || category === void 0 ? void 0 : category.name) {
                case 'Chair':
                    folderName = 'Chair';
                    break;
                case 'Table':
                    folderName = 'Table';
                    break;
                case 'Arm Chair':
                    folderName = 'Arm%20chair';
                    break;
                case 'Bed':
                    folderName = 'Bed';
                    break;
                case 'Lamp':
                    folderName = 'Lamp';
                    break;
                default:
                    folderName = 'New';
                    break;
            }
            ;
            return folderName;
        });
    }
}
exports.default = ProductController;
