const express = require('express')
const app = express()
const port = 4000
const user = require('../routes/user')

app.set('view engine', 'twig')


app.get('/', (req,res)=>{
	res.send('server')
})

app.get('/user_by_name/:name', user.by_name)

app.get('/user_by_id/:id', user.by_id)


app.listen(port, '0.0.0.0', ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
})