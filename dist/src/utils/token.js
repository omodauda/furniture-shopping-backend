"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signToken = (user) => {
    const payload = { id: user.id };
    const secretKey = process.env.JWT_SECRET;
    const expiresIn = 60 * 60 * 240;
    const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn });
    return { token, expiresIn };
};
exports.signToken = signToken;
