const Joi = require('joi-plus')
const expressJoi = require('express-joi-validation')

const validator = expressJoi.createValidator({ passError: true})
const { name, email, password, birth_date } = require('../validation')
const bodySchema =  Joi.object({ name, email, password, birth_date })
const validateNewUser = validator.body(bodySchema)

module.exports = {
  validateNewUser,
  bodySchema
}
