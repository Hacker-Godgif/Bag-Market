const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

// -------------------------------------------------------------- Models ------------------ --------------------------------------------
const userModel = require('./Models/usermodel');
const productModel = require('./Models/productmodel');
const db = require('./config/mongoose-connection');

// -------------------------------------------------------------- Routers ------------------ --------------------------------------------
const usersRouter = require('./routes/usersRouters');
const productsRouter = require('./routes/productRouters');
const ownersRouter = require('./routes/ownerRouter');

//---------------------------------------------------------------- Middlewares ------------------ --------------------------------------------
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
// -------------------------------------------------------------- Routes ------------------ -------------------------------------------
app.use('/owners', ownersRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



app.listen(3000);