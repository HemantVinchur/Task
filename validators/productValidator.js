const { Joi, celebrate } = require('celebrate')
const productReqValidator = celebrate({
    body: Joi.object().keys({
        productName: Joi.string().optional(),
        specifications: {
            color: Joi.string().required(),
            size: Joi.string().required(),
            price: Joi.number().required()
        }
    })
})

module.exports = { productReqValidator }