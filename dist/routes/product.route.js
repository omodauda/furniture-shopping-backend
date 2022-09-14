"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
class ProductRoute {
    constructor() {
        this.path = '/product';
        this.router = (0, express_1.Router)();
        this.ProductController = new product_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            .route(`${this.path}`)
            .post(
        // validationMiddleware(addProductValidation),
        auth_middleware_1.authMiddleware, auth_middleware_1.adminOnlyMiddleware, this.ProductController.addProduct);
    }
}
exports.default = ProductRoute;
