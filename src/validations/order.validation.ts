import Joi from 'joi';

const orderValidation = Joi.object().keys({
  total: Joi.number()
    .required()
    .positive()
    .messages({
      'number.base': "total must be a number",
      'any.required': 'total is required',
      'number.positive': 'total should be a positive number',
    }),
  orders: Joi.array()
    .min(1)
    .required()
    .messages({
      'array.base': 'orders must be an array',
      'any.required': 'orders are required',
      'array.empty': 'orders cannot be an empty field',
      'array.min': 'orders must contain at least one order'
    })
    .items(Joi.object().keys({
      quantity: Joi.number()
        .required()
        .integer()
        .positive()
        .messages({
          'any.required': 'quantity is required',
          'number.integer': 'quantity should be an integer',
          'number.positive': 'quantity should be a positive number',
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
    }))
})

export { orderValidation }