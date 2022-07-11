const Joi = require('joi')


exports.bodySchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().alphanum().min(8).max(30).required(),
  age:Joi.number().integer().min(4).max(130).required()

})

exports.updateSchema = Joi.object({
  name: Joi.string(),
  password: Joi.string().alphanum().min(8).max(30),
  age:Joi.number().integer().min(4).max(130)
})

