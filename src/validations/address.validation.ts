import Joi from 'joi';

const createAddressValidation = Joi.object().keys({
  fullName: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.empty': 'full name cannot be an empty field',
      'string.min': 'full name should be minimum of 5 characters length',
      'any.required': 'full name is required'
    }),
  address: Joi.string()
    .min(10)
    .required()
    .messages({
      'string.empty': 'address cannot be an empty field',
      'string.min': 'address should be minimum of 10 characters length',
      'any.required': 'address is required'
    }),
  postalCode: Joi.string()
    .min(5)
    .required()
    .messages({
      'string.empty': 'postal code cannot be an empty field',
      'string.min': 'postal code should be minimum of 10 characters length',
      'any.required': 'postal code is required'
    }),
  country: Joi.string()
    .min(4)
    .required()
    .messages({
      'string.empty': 'country cannot be an empty field',
      'string.min': 'country should be minimum of 4 characters length',
      'any.required': 'country is required'
    }),
  city: Joi.string()
    .min(1)
    .required()
    .messages({
      'string.empty': 'city cannot be an empty field',
      'string.min': 'city should be minimum of 1 characters length',
      'any.required': 'city is required'
    }),
})

export { createAddressValidation };