require('dotenv').config()
const express = require('express')
require('express-group-routes')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT

app.use(cors())
app.use(logger('dev'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.group("/api/v1", (router) => {
    router.get('/test', (req, res) => {
        res.end('Test')
    })
})
