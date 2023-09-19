const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var db_connection = require('./mysql/config.js');
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
}
)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
}
)




