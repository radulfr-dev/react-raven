require('dotenv').config()
const express = require('express')
require('express-group-routes')
const app = express()
const session = require('express-session')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT

import Auth from './middleware/auth'
import AuthController from './controllers/AuthController'

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(session({
    secret: process.env.APP_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV == 'dev' ? false : true
    }
}))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

app.get('/', (req, res) => {
    console.log(req);
});

app.group("/api/v1", (router) => {
    router.post('/login', (req, res) => {
        AuthController.loginUser(req.body.username)
    })
    router.post('/register', (req, res) => {
        AuthController.registerUser(req.body.username)
    })
})

