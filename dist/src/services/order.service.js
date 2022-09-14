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
const error_handler_1 = __importDefault(require("../utils/handlers/error.handler"));
const prisma_1 = __importDefault(require("../lib/prisma"));
class OrderService {
    constructor() {
        this.order = prisma_1.default.order;
        this.orderItem = prisma_1.default.orderItem;
        this.userAddress = prisma_1.default.userAddress;
        this.prisma = prisma_1.default;
        this.createOrder = (userId, orderData, orderNo) => __awaiter(this, void 0, void 0, function* () {
            const validUserAddress = yield this.userAddress.findUnique({
                where: {
                    id: orderData.deliveryAddressId,
                }
            });
            if (!validUserAddress) {
                throw new error_handler_1.default(400, 'invalid user address');
            }
            if (validUserAddress.userId !== userId) {
                throw new error_handler_1.default(401, 'address does not belong to this user');
            }
            const orderRecord = yield this.order.create({
                data: {
                    userId,
                    deliveryAddressId: orderData.deliveryAddressId,
                    total: orderData.total,
                    orderNo
                }
            });
            const orderItemRequests = orderData.orders.map(order => {
                return this.orderItem.create({
                    data: {
                        orderId: orderRecord.id,
                        productId: order.productId,
                        quantity: order.quantity
                    }
                });
            });
            yield Promise.all(orderItemRequests);
        });
        this.getUserOrders = (userId, status) => __awaiter(this, void 0, void 0, function* () {
            if (status !== 'Processing' && status !== 'Cancelled' && status !== 'Delivered') {
                throw new error_handler_1.default(400, 'invalid query param');
            }
            return yield this.order.findMany({
                where: {
                    userId,
                    status
                },
                include: {
                    orderItems: true
                }
            });
        });
    }
}
exports.default = OrderService;
