const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');
const userModel = require('./Models/usermodel');
const productModel = require('./Models/productmodel');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(3000);