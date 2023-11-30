const express = require("express");
const moment = require("moment");
const { query } = require("./database/db");
const ejs = require("ejs");


require('dotenv').config();
const mysql = require("mysql2");
 
const port = process.env.PORT || 34000

const app = express();

const userRoute = require('./routes/user.route');
const postRoute = require('./routes/post.route');

const { userSignupValidator } = require("./validator/user-validator");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", async (req, res) => {
    const data = {
        user: "user001",
        title: "Manager",
        content: "user001 is an HR manager",
        notification: 2555,
        users: [],
    }

    let users = await query("select * from users");
    

    data.users = users;

    res.render("index", data);
});

app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
// app.use('/api/sequelize/users', userSeqRoute);

app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);
})

