const express = require("express");
const moment = require("moment");
const { query } = require("./database/db");
require('dotenv').config();
const mysql = require("mysql2");
 
const port = process.env.PORT || 34000

const app = express();

const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');
const userSeqRoute = require('./routes/user.route.seq');

const { userSignupValidator } = require("./validator/user-validator");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.status(200).json({message: "this is the index page"})
});

app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/sequelize/users', userSeqRoute);

app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);
})

