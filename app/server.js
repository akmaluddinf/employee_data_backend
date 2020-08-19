const express = require('express')
const app = express()
const port = 4000

app.get('/', async (req,res)=>{
	res.send('server')
})


app.listen(port, '0.0.0.0', ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
})