const by_name = (req,res)=>{
    const data = {
        name: req.params.name
    }
    res.render('user_name', data)
}

module.exports ={
    by_name
}
