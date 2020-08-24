const upload = (req,res)=>{
  const data = {
    path: req.session.uploadPath
  }

  req.session.uploadPath = undefined

  res.render(
    'form_upload',
    data
    )
}

module.exports = upload
