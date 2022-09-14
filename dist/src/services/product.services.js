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
const prisma_1 = __importDefault(require("../lib/prisma"));
class ProductService {
    constructor() {
        this.product = prisma_1.default.product;
        this.category = prisma_1.default.productCategory;
        this.productImage = prisma_1.default.productImage;
        this.createProduct = (name, description, price, quantity, productCategoryId, imageData) => __awaiter(this, void 0, void 0, function* () {
            const product = yield this.product.create({
                data: {
                    name,
                    description,
                    price,
                    quantity,
                    productCategoryId
                }
            });
            for (const image of imageData) {
                yield this.productImage.create({
                    data: {
                        productId: product.id,
                        url: image.url,
                        publicId: image.publicId
                    }
                });
            }
        });
        this.getCategoryNameById = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.category.findUnique({ where: { id } });
        });
        this.getCategories = (name) => __awaiter(this, void 0, void 0, function* () {
            return yield this.category.findUnique({
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
        });
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            return yield this.product.findMany();
        });
        this.getProductById = (productId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.product.findUnique({
                where: {
                    id: productId
                },
                include: {
                    images: true
                }
            });
        });
    }
}
exports.default = ProductService;
