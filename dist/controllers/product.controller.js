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
class ProductController {
    constructor() {
        this.ProductService = new product_services_1.default();
        this.addProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const product = req.body;
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
        });
    }
}
exports.default = ProductController;
