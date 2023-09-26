const express = require("express");
const moment = require("moment");
const { query } = require("./database/db");
require('dotenv').config();
const mysql = require("mysql2");

const port = process.env.APP_PORT;

const app = express();

const userRoute = require('./routes/user.route');

app.get("/", (req, res)=>{
    res.status(200).json({message: "this is the index page"})
});

app.use('/api/users', userRoute);



app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);
})

