var createError = require('http-errors');
var express = require('express');

// var cors = require("cors");

var locationRoute = require('./routes/location');

var app = express();

// app.use(cors());
app.use(function (req, res, next) {

    console.log("middleware works")
    next();    
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/findNearest', locationRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.listen(3000, () => console.log("Listening..."));