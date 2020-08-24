//const User = require('../models/user')
const model = require('../models')
const User = model.User

const post_data = (req, res) => {
    //res.send(req.body)
    User.create(req.body)
    .then(
        (user) => res.redirect(`/user/${user.id}`),
        (err) => res.send(err)
    )
}

module.exports = post_data
