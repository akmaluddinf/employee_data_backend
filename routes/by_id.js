//const User = require('../models/user')
const model = require('../models')
const User = model.User

const by_id = (req,res)=>{
    User.findByPk(req.params.id, { raw: true, nest: true }).then(
        (user) => {
            res.render('single_user', { user })
        },
        (err) => res.send(err)
    )
}

module.exports = by_id
