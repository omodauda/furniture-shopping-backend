"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAddressValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createAddressValidation = joi_1.default.object().keys({
    fullName: joi_1.default.string()
        .min(5)
        .required()
        .messages({
        'string.empty': 'full name cannot be an empty field',
        'string.min': 'full name should be minimum of 5 characters length',
        'any.required': 'full name is required'
    }),
    address: joi_1.default.string()
        .min(10)
        .required()
        .messages({
        'string.empty': 'address cannot be an empty field',
        'string.min': 'address should be minimum of 10 characters length',
        'any.required': 'address is required'
    }),
    postalCode: joi_1.default.string()
        .min(5)
        .required()
        .messages({
        'string.empty': 'postal code cannot be an empty field',
        'string.min': 'postal code should be minimum of 10 characters length',
        'any.required': 'postal code is required'
    }),
    country: joi_1.default.string()
        .min(4)
        .required()
        .messages({
        'string.empty': 'country cannot be an empty field',
        'string.min': 'country should be minimum of 4 characters length',
        'any.required': 'country is required'
    }),
    city: joi_1.default.string()
        .min(1)
        .required()
        .messages({
        'string.empty': 'city cannot be an empty field',
        'string.min': 'city should be minimum of 1 characters length',
        'any.required': 'city is required'
    }),
});
exports.createAddressValidation = createAddressValidation;
