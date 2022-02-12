const Joi = require("joi");

const contactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
  phone: Joi.string().pattern(/^[\d,\(,\),\-,\s]+$/),
});

module.exports = contactSchema;
