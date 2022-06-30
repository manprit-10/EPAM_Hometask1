const Joi = require("joi");

module.exports = {
  schemas: {
    userSchema: Joi.object().keys({
      id: Joi.string().required(),
      login: Joi.string().required(),
      password: Joi.string().pattern(new RegExp("^[a-z0-9]{3,30}$")).required(),
      age: Joi.number().integer().min(4).max(130).required(),
      isDeleted: Joi.boolean().required(),
    }),
  },

  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        return res.status(400).json({
          message: result.error.details[0].message,
        });
      } else {
        if (!req.value) {
          req.value = {};
        }
        req.value["body"] = result.value;
        next();
      }
    };
  },
};
