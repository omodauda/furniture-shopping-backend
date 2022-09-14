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
exports.adminOnlyMiddleware = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const error_handler_1 = __importDefault(require("../utils/handlers/error.handler"));
const user_1 = __importDefault(require("../database/models/user"));
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return next(new error_handler_1.default(401, 'Unauthorized'));
        }
        const token = authorization.split('Bearer ')[1].trim();
        try {
            const { id: userId } = (jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET));
            const user = yield user_1.default.findOne({ where: { id: userId } });
            if (!user) {
                return next(new error_handler_1.default(401, 'Unauthorized'));
            }
            req.user = user;
            return next();
        }
        catch (error) {
            return next(new error_handler_1.default(401, error.message));
        }
    });
}
exports.authMiddleware = authMiddleware;
function adminOnlyMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { isAdmin } = req.user;
        if (!isAdmin) {
            return next(new error_handler_1.default(401, 'You do not have permission to perform this action'));
        }
        else {
            next();
        }
    });
}
exports.adminOnlyMiddleware = adminOnlyMiddleware;
