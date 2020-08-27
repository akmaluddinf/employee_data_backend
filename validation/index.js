const Joi = require('joi-plus')

const name = Joi
.string()
.alpha()
.min(3)
.max(20)
.trim()
.required()

const email = Joi
.string()
.email()

const password = Joi
.string()
.password({
  min: 6,
  max: 8,
})

const birth_date = Joi
.date()

module.exports = {
  name,
  email,
  password,
  birth_date
}
