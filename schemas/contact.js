const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  phone: Joi.string().pattern(/^[\d,\(,\),\-,\s]+$/),
});

const updateContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = { contactSchema, updateContactSchema };
