/**
 * Created by nwu on 2/15/18.
 */
var mongoose = require('mongoose');
var util = require('../util');
var models = require('./models');

function init() {
  if (util.is_prod()) {
    console.log('Running in production mode')
  } else {
    console.log('Running in development mode')
  }
  mongoose.connect(util.get_database());
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Mongo connection error:'))
}


module.exports = {
  init: init,
  models: models
};