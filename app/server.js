const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const session = require('express-session')
const sessionStore = require('express-session-sequelize')
const SessionStore = sessionStore(session.Store)
const passport = require('passport')
const { Strategy } = require('passport-local')

const db = require('../models')
const sequelizeSessionStore = new SessionStore({
  db: db.sequelize,
})

const user = require('../routes/user')
const upload = require('../routes/upload')
const postUpload = require('../routes/post_upload')
const login = require('../routes/login')

const hbs = require ('express-hbs')

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/../views/partials',
  defaultLayout: __dirname + '/../views/layout/default.hbs'
}));
app.set('views', __dirname + '/../views');
app.set('view engine', 'hbs');

//app.set('view engine', 'twig')
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())
app.use(fileUpload({ createParentPath: true}))
app.use('/uploads', express.static('uploads'))

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: 'auto' },
  store: sequelizeSessionStore
}))

app.get('/', (req,res)=>{
	res.render('home')
})

app.get('/form', (req,res)=>{
	res.render('form')
})

const { validateNewUser } = require('./validateNewUser')

//app.get('/user_by_name/:name', user.by_name)
app.get('/user/new', user.form_create)
app.post('/user/new', /* validateNewUser, */ user.post_data)
app.get('/user/:id/delete', user.delete_id)
app.get('/user/:id/update', user.form_update)
app.post('/user/:id/update', user.update_by_id)
app.get('/user/:id', user.by_id)
app.get('/user', user.get_all_user)
app.get('/upload', upload)
app.post('/upload', postUpload)

app.get('/login', login.get_login)
app.post('/login', login.post_login)

const { validationErrorHandler } = require('./validationErrorHandler')
app.use(validationErrorHandler)


app.listen(port, '0.0.0.0', ()=>{
	console.log(`Example app listening at http://localhost:${port}`)
})
