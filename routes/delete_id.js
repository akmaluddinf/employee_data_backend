const { Op } = require('sequelize')

const User = require('../models/user')

const delete_id = (req,res)=>{
    User.destroy({
        where: {
            id: {
                [Op.eq]: req.params.id
            }
        }
    })
    .then(
        () => res.redirect('/user'),
        (err) => res.send(err)
    )
}

module.exports = delete_id