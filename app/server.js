const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const session = require('express-session')
const user = require('../routes/user')
const upload = require('../routes/upload')
const postUpload = require('../routes/post_upload')

app.set('view engine', 'twig')
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())
app.use(fileUpload({ createParentPath: true}))

app.use('/uploads', express.static('uploads'))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' }
}))

app.get('/', (req,res)=>{
	res.send('server')
})

//app.get('/user_by_name/:name', user.by_name)
app.get('/user/new', user.form_create)
app.post('/user/new', user.post_data)
app.get('/user/:id/delete', user.delete_id)
app.get('/user/:id/update', user.form_update)
app.post('/user/:id/update', user.update_by_id)
app.get('/user/:id', user.by_id)
app.get('/user', user.get_all_user)
app.get('/upload', upload)
app.post('/upload', postUpload)

app.listen(port, '0.0.0.0', ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
})
