require('dotenv').config()
const express = require('express')
require('express-group-routes')
const app = express()
const session = require('express-session')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT

import Auth from './middleware/auth'

app.use(cors())
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
})

app.group("/api/v1", (router) => {
    router.use(Auth.authenticateCall)
    router.get('/test', (req, res) => {
        res.status(200).json({
            "message": "Test"
        })
    })
    router.get('/secondTest', (req, res) => {
        res.status(200).json({
            "message": "Second Test"
        })
    })
})
