"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const orderValidation = joi_1.default.object().keys({
    total: joi_1.default.number()
        .required()
        .positive()
        .messages({
        'number.base': "total must be a number",
        'any.required': 'total is required',
        'number.positive': 'total should be a positive number',
    }),
    orders: joi_1.default.array()
        .min(1)
        .required()
        .messages({
        'array.base': 'orders must be an array',
        'any.required': 'orders are required',
        'array.empty': 'orders cannot be an empty field',
        'array.min': 'orders must contain at least one order'
    })
        .items(joi_1.default.object().keys({
        quantity: joi_1.default.number()
            .required()
            .integer()
            .positive()
            .messages({
            'any.required': 'quantity is required',
            'number.integer': 'quantity should be an integer',
            'number.positive': 'quantity should be a positive number',
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
    })),
    deliveryAddressId: joi_1.default.string()
        .min(36)
        .max(36)
        .required()
        .messages({
        'string.empty': 'delivery address id cannot be an empty field',
        'string.min': 'delivery address id should be minimum of 36 characters length',
        'string.max': 'delivery address id should not be more than 36 characters length',
        'any.required': 'delivery address id is required'
    }),
});
exports.orderValidation = orderValidation;
