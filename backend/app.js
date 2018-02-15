var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = require('./database');
var questions = require('./routes/questions');

var app = express();

mongoose.Promise = require('bluebird');

db.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/question', questions);

module.exports = app;
