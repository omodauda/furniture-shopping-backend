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
const order_service_1 = __importDefault(require("../services/order.service"));
class OrderController {
    constructor() {
        this.OrderService = new order_service_1.default();
        this.createOrder = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const orderData = req.body;
            const { id: userId } = req.user;
            try {
                const orderNo = yield this.generateOrderNo();
                yield this.OrderService.createOrder(userId, orderData, orderNo);
                return res
                    .status(201)
                    .json({
                    status: 'success',
                    message: 'order submitted successfully'
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.getUserOrders = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            const { status } = req.query;
            try {
                const orders = yield this.OrderService.getUserOrders(userId, status);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data: orders
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.generateOrderNo = () => __awaiter(this, void 0, void 0, function* () {
            const min = 100000000;
            const max = 999999999;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        });
    }
}
exports.default = OrderController;
