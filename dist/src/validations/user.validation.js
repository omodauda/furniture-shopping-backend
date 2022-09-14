"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = exports.signUpValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const signUpValidation = joi_1.default.object({
    email: joi_1.default.string()
        .email({ minDomainSegments: 2 })
        .min(5)
        .max(100)
        .required()
        .messages({
        'string.empty': 'email cannot be an empty field',
        'string.email': 'please enter a valid email address',
        'any.required': 'email is required'
    }),
    password: joi_1.default.string()
        .min(5)
        .max(20)
        .required()
        .messages({
        'string.empty': 'password cannot be an empty field',
        'string.min': 'password should be minimum of 5 characters length',
        'string.max': 'password should not be more than 20 characters length',
        'any.required': 'password is required',
    }),
    fullName: joi_1.default.string()
        .min(5)
        .required()
        .messages({
        'string.empty': 'full name cannot be an empty field',
        'string.min': 'full name should be minimum of 5 characters length',
        'any.required': 'full name is required'
    }),
});
exports.signUpValidation = signUpValidation;
const loginValidation = joi_1.default.object({
    email: joi_1.default.string()
        .email({ minDomainSegments: 2 })
        .min(5)
        .max(100)
        .required()
        .messages({
        'string.empty': 'email cannot be an empty field',
        'string.email': 'please enter a valid email address',
        'any.required': 'email is required'
    }),
    password: joi_1.default.string()
        .min(5)
        .max(20)
        .required()
        .messages({
        'string.empty': 'password cannot be an empty field',
        'string.min': 'password should be minimum of 5 characters length',
        'string.max': 'password should not be more than 20 characters length',
        'any.required': 'password is required',
    }),
});
exports.loginValidation = loginValidation;
