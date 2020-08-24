//const User = require('../models/user')
const model = require('../models')
const User = model.User

const form_update = (req, res) => {
    User.findByPk(req.params.id).then(
        (user) => {
            res.render('form_update', { user })
        },
        (err) => res.send(err)
    )
}

module.exports = form_update
