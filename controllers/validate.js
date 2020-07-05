const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
    //schema
    empName: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
    empPass:Joi.string()
        .alphanum()
        .min(2)
        .max(8)
        .required()

})