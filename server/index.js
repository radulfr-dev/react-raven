require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT

app.use(cors())
app.use(logger('dev'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.end('Server root')
})
