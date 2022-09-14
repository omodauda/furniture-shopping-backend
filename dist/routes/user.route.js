"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const address_controller_1 = __importDefault(require("../controllers/address.controller"));
const validation_middleware_1 = __importDefault(require("../middlewares/validation.middleware"));
const user_validation_1 = require("../validations/user.validation");
const address_validation_1 = require("../validations/address.validation");
const auth_middleware_1 = require("../middlewares/auth.middleware");
class UserRoute {
    constructor() {
        this.path = '/user';
        this.router = (0, express_1.Router)();
        this.UserController = new user_controller_1.default();
        this.AddressController = new address_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router
            .route(`${this.path}/signup`)
            .post((0, validation_middleware_1.default)(user_validation_1.signUpValidation), this.UserController.signUp);
        this.router
            .route(`${this.path}/login`)
            .post((0, validation_middleware_1.default)(user_validation_1.loginValidation), this.UserController.login);
        this.router
            .route(`${this.path}/profile`)
            .get(auth_middleware_1.authMiddleware, this.UserController.profile);
        this.router
            .route(`${this.path}/address`)
            .post(auth_middleware_1.authMiddleware, (0, validation_middleware_1.default)(address_validation_1.createAddressValidation), this.AddressController.addAddress);
    }
}
exports.default = UserRoute;
