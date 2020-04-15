const Joi = require('joi');

module.exports = {
  auth: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
  create: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      password: Joi.string().required(),
    },
  },
};
