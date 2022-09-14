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
const user_service_1 = __importDefault(require("../services/user.service"));
const token_1 = require("../utils/token");
class UserController {
    constructor() {
        this.UserService = new user_service_1.default();
        this.signUp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password, fullName } = req.body;
                yield this.UserService.createUser(email, password, fullName);
                return res
                    .status(201)
                    .json({
                    status: 'success',
                    message: 'user successfully registered'
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield this.UserService.login(email, password);
                const { token } = (0, token_1.signToken)(user);
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    message: 'user login successful',
                    token,
                    data: user
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.profile = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const { id: userId } = req.user;
            try {
                const { fullName, email, photo, addresses, orders } = yield this.UserService.getProfile(userId);
                const data = {
                    fullName,
                    email,
                    photo,
                    addresses: addresses.length,
                    orders: orders.length
                };
                return res
                    .status(200)
                    .json({
                    status: 'success',
                    data
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = UserController;
