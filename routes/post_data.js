//const User = require('../models/user')
const model = require('../models')
const bcrypt = require('bcrypt')
const User = model.User

const post_data = async(req, res) => {
  const Joi = require('joi-plus')
  const { name, password, email, birth_date } = require('../validation')
  const schema = Joi.object({ name, password, email, birth_date })
  const options = {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: false
  }
  const result = schema.validate(req.body, options)
  const { error, value } = result
  const keys = Object.keys(value)
  const data = keys.map((key) => ({ name: key, value: value[key] }))
  if(error){
    error.details.forEach(valueWithError => {
      const key = valueWithError.context.key
      const errorMessage = valueWithError.message
      const processedValue = valueWithError.context.value
      const _value = error._original[key]
      data.forEach((d, i) => {
        if(d.name === key) {
          data[i] = {
            name: d.name,
            value: processedValue,
            error: errorMessage,
            _value: _value
          }
        }
      })
    })
  }

  const reduced = data.reduce((acc, cv, idx, arr) => {
    acc[cv.name] = cv
    return acc
  }, {})

  if(error) {
    req.session.data = reduced
    req.session.save(
      () => res.redirect('/user/new')
    )
  } else {
    //res.redirect(`/user/${user.id}`)
  }
}

module.exports = post_data
