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
const error_handler_1 = __importDefault(require("../utils/handlers/error.handler"));
class CartService {
    constructor() {
        this.cartItem = prisma_1.default.cartItem;
        this.addToCart = (userId, cartItemData) => __awaiter(this, void 0, void 0, function* () {
            const existingCartItem = yield this.cartItem.findFirst({
                where: {
                    userId,
                    productId: cartItemData.productId,
                }
            });
            if (existingCartItem) {
                throw new error_handler_1.default(400, 'item already in cart');
            }
            return yield this.cartItem.create({
                data: {
                    userId,
                    productId: cartItemData.productId,
                    quantity: cartItemData.quantity
                }
            });
        });
        this.getUserCart = (userId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.cartItem.findMany({
                where: {
                    userId,
                },
                select: {
                    id: true,
                    quantity: true,
                    product: {
                        select: {
                            id: true,
                            name: true,
                            description: true,
                            images: true,
                            price: true,
                            quantity: true,
                        }
                    }
                },
            });
        });
        this.getCartItem = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.cartItem.findUnique({
                where: {
                    id,
                }
            });
        });
        this.removeFromCart = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield this.cartItem.delete({
                where: {
                    id,
                }
            });
        });
        this.updateCartItem = (id, quantity) => __awaiter(this, void 0, void 0, function* () {
            return yield this.cartItem.update({
                where: {
                    id,
                },
                data: {
                    quantity
                }
            });
        });
    }
}
exports.default = CartService;
