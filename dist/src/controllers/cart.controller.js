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
const cart_service_1 = __importDefault(require("../services/cart.service"));
const error_handler_1 = __importDefault(require("../utils/handlers/error.handler"));
class CartController {
    constructor() {
        this.CartService = new cart_service_1.default();
        this.addToCart = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const cartItemData = req.body;
            const { id: userId } = req.user;
            try {
                yield this.CartService.addToCart(userId, cartItemData);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    message: 'item added to cart successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getUserCart = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            try {
                const cart = yield this.CartService.getUserCart(userId);
                let total = 0;
                for (const item of cart) {
                    total = total + (Number(item.product.price) * item.quantity);
                }
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data: {
                        total,
                        cart
                    }
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.removeFromCart = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            const { id: cartItemId } = req.params;
            try {
                const item = yield this.CartService.getCartItem(cartItemId);
                if (!item) {
                    throw new error_handler_1.default(400, 'cart item not found');
                }
                if (item.userId !== userId) {
                    throw new error_handler_1.default(401, 'Unauthorized');
                }
                yield this.CartService.removeFromCart(cartItemId);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    message: 'cart item removed successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.updateCartItem = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            const { id: cartItemId } = req.params;
            const { quantity } = req.body;
            try {
                const item = yield this.CartService.getCartItem(cartItemId);
                if (!item) {
                    throw new error_handler_1.default(400, 'cart item not found');
                }
                if (item.userId !== userId) {
                    throw new error_handler_1.default(401, 'Unauthorized');
                }
                yield this.CartService.updateCartItem(cartItemId, quantity);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    message: 'cart item updated successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = CartController;
