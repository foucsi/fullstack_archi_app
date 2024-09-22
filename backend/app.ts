require("dotenv").config();
const connection = require('./src/models/connection')
import authManager from './src/api/middlewares/authMiddleware';
import errorHandler from './src/api/middlewares/errorHandler';


var express = require('express');
//
// const authManager = require("./src/api/middlewares/authMiddleware")
// const errorHandler = require("./src/api/middlewares/errorHandler")


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/api/routes');
var usersRouter = require('./src/api/routes/users');

var app = express();
const fileUpload = require("express-fileupload");
app.use(fileUpload());
const cors = require("cors");
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use(authManager)
//Warning, this generic middlewares should be the last one
app.use(errorHandler);

module.exports = app;
