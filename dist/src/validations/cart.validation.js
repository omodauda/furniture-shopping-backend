"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartItemValidation = exports.addToCartValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const addToCartValidation = joi_1.default.object().keys({
    quantity: joi_1.default.number()
        .required()
        .integer()
        .positive()
        .messages({
        'number.base': "quantity must be a number",
        'any.required': 'quantity is required',
        'number.positive': 'quantity should be a positive number',
        'number.integer': 'quantity should be an integer'
    }),
    productId: joi_1.default.string()
        .min(36)
        .max(36)
        .required()
        .messages({
        'string.empty': 'product id cannot be an empty field',
        'string.min': 'product id should be minimum of 36 characters length',
        'string.max': 'product id should not be more than 36 characters length',
        'any.required': 'product id is required'
    }),
});
exports.addToCartValidation = addToCartValidation;
const updateCartItemValidation = joi_1.default.object().keys({
    quantity: joi_1.default.number()
        .required()
        .integer()
        .positive()
        .messages({
        'number.base': "quantity must be a number",
        'any.required': 'quantity is required',
        'number.positive': 'quantity should be a positive number',
        'number.integer': 'quantity should be an integer'
    }),
});
exports.updateCartItemValidation = updateCartItemValidation;
