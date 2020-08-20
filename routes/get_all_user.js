const User = require('../models/user')

const get_all_user = (req, res) =>{
    User.findAll().then(
        (users) => res.render('user_all', {users}),
        (err) => res.send(err)
    )
}

module.exports = get_all_user