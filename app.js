const express = require("express");
const path = require("path");
const app = express();

const publicpath = path.join(__dirname, "./public");
// console.log((path.join(__dirname,'public')));

app.use(express.static(publicpath));

// app.get('/register',function(req,res){

//     res.send('hiii register');

// }) 

app.listen(7000);
