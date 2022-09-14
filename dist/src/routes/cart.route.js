"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_controller_1 = __importDefault(require("../controllers/cart.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const validation_middleware_1 = __importDefault(require("../middlewares/validation.middleware"));
const cart_validation_1 = require("../validations/cart.validation");
class CartRoute {
    constructor() {
        this.path = '/cart';
        this.router = (0, express_1.Router)();
        this.CartController = new cart_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            .route(`${this.path}`)
            .get(auth_middleware_1.authMiddleware, this.CartController.getUserCart)
            .post(auth_middleware_1.authMiddleware, (0, validation_middleware_1.default)(cart_validation_1.addToCartValidation), this.CartController.addToCart);
        this.router
            .route(`${this.path}/:id`)
            .patch(auth_middleware_1.authMiddleware, (0, validation_middleware_1.default)(cart_validation_1.updateCartItemValidation), this.CartController.updateCartItem)
            .delete(auth_middleware_1.authMiddleware, this.CartController.removeFromCart);
    }
}
exports.default = CartRoute;
