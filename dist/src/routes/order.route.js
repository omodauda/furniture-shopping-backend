"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = __importDefault(require("../controllers/order.controller"));
const validation_middleware_1 = __importDefault(require("../middlewares/validation.middleware"));
const order_validation_1 = require("../validations/order.validation");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class OrderRoute {
    constructor() {
        this.path = '/order';
        this.router = (0, express_1.Router)();
        this.OrderController = new order_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            .route(`${this.path}`)
            .get(auth_middleware_1.authMiddleware, this.OrderController.getUserOrders)
            .post(auth_middleware_1.authMiddleware, (0, validation_middleware_1.default)(order_validation_1.orderValidation), this.OrderController.createOrder);
    }
}
exports.default = OrderRoute;
