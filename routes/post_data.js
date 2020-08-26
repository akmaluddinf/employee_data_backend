//const User = require('../models/user')
const model = require('../models')
const bcrypt = require('bcrypt')
const User = model.User

function isAlphabetOnly(name){
  const regex = /[a-z\s]/g;
  const alphabetOnlyArray = name.match(regex);
  const alphabetOnlyArrayCount = alphabetOnlyArray === null ? 0 : alphabetOnlyArray.length
  const nameStringCount = name.length
  return (nameStringCount === alphabetOnlyArrayCount)
}

// function required(name){
//   if(name === undefined){
//     return false;
//   }else{
//     return name.length < 1;
//   }
// }

const post_data = async(req, res) => {

  if(isAlphabetOnly(`${req.body.name}`)){
    const data = req.body
    data.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8))

    // const data = {
    //   name : req.body.name,
    //   password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8)),
    //   email : req.body.email,
    //   birth_date : req.body.birth_date
    // }
    const user = await User.create(data)
    res.redirect(`/user/${user.id}`)
  } else{
    req.session.errorMessage = {
      name : 'harus alphabet atau spasi'
    }
    req.session.oldValue = {
      name: req.body.name
    }
    res.redirect('/user/new')
  }
}

module.exports = post_data
