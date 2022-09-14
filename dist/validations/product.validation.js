"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const addProductValidation = joi_1.default.object().keys({
    productCategoryId: joi_1.default.string()
        .min(36)
        .max(36)
        .required()
        .messages({
        'string.empty': 'product category id cannot be an empty field',
        'string.min': 'product category id should be minimum of 36 characters length',
        'string.max': 'product category id should not be more than 36 characters length',
        'any.required': 'product category id is required'
    }),
    name: joi_1.default.string()
        .min(5)
        .max(30)
        .required()
        .messages({
        'string.empty': 'product category id cannot be an empty field',
        'string.min': 'product category id should be minimum of 5 characters length',
        'string.max': 'product category id should not be more than 30 characters length',
        'any.required': 'product category id is required'
    }),
    description: joi_1.default.string()
        .min(10)
        .max(150)
        .required()
        .messages({
        'string.empty': 'description cannot be an empty field',
        'string.min': 'description should be minimum of 10 characters length',
        'string.max': 'description should not be more than 150 characters length',
        'any.required': 'description is required'
    }),
    price: joi_1.default.number()
        .required()
        .integer()
        .positive()
        .messages({
        'any.required': 'price is required',
        'number.integer': 'price should be an integer',
        'number.positive': 'price should be a positive number',
    }),
    quantity: joi_1.default.number()
        .required()
        .integer()
        .positive()
        .messages({
        'any.required': 'quantity is required',
        'number.integer': 'quantity should be an integer',
        'number.positive': 'quantity should be a positive number',
    })
});
exports.addProductValidation = addProductValidation;
