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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../database/models/user"));
class UserService {
    createUser(email, password, fullName) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingEmail = yield user_1.default.findOne({ where: { email } });
            if (existingEmail)
                throw new error_handler_1.default(409, `user with email ${email} already exists`);
            const hashedPassword = yield bcrypt_1.default.hash(password, 10);
            return yield user_1.default.create({ email, password: hashedPassword, fullName });
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield user_1.default.findOne({ where: { email } });
            if (!existingUser)
                throw new error_handler_1.default(409, 'invalid email/password');
            const isValidPassword = yield bcrypt_1.default.compare(password, existingUser.password);
            if (!isValidPassword)
                throw new error_handler_1.default(401, 'invalid email/password');
            return existingUser;
        });
    }
    getProfile(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield user_1.default.findOne({
                where: {
                    id: userId,
                },
            });
            return profile;
        });
    }
}
exports.default = UserService;
