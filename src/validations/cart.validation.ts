import Joi from "joi";

const addToCartValidation = Joi.object().keys({
  quantity: Joi.number()
    .required()
    .integer()
    .positive()
    .messages({
      'number.base': "quantity must be a number",
      'any.required': 'quantity is required',
      'number.positive': 'quantity should be a positive number',
      'number.integer': 'quantity should be an integer'
    }),
  productId: Joi.string()
    .min(36)
    .max(36)
    .required()
    .messages({
      'string.empty': 'product id cannot be an empty field',
      'string.min': 'product id should be minimum of 36 characters length',
      'string.max': 'product id should not be more than 36 characters length',
      'any.required': 'product id is required'
    }),
})

export { addToCartValidation }