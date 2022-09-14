"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const product_route_1 = __importDefault(require("./routes/product.route"));
const order_route_1 = __importDefault(require("./routes/order.route"));
const cart_route_1 = __importDefault(require("./routes/cart.route"));
dotenv_1.default.config();
const app = new app_1.default([
    new user_route_1.default(),
    new product_route_1.default(),
    new order_route_1.default(),
    new cart_route_1.default()
]);
app.listen();
