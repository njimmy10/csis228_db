const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var db_connection = require('./mysql/config.js');
var query = require('./mysql/db.js');
require('dotenv').config()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    // SQL TABLE CALLEd test 

    const rows = query('SELECT * FROM test', [])
    .then(rows => {
        res.json(rows)
    }
    )
}
)

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
}
)




