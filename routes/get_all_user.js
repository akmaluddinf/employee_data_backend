//const User = require('../models/user')
const { Sequelize } = require('sequelize')
const model = require('../models')
const User = model.User

const get_all_user = (req, res) => {
  User.findAll({
    raw: true,
    nest: true
  }).then(
    (users) => {
      //if(req.xhr){
      if (req.headers.accept === 'application/json') {
        res.send(users)
      }
      else {
        res.render('user_all', { users })
      }
    },
    (err) => res.send(err)
  )
}

module.exports = get_all_user
