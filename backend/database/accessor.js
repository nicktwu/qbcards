/**
 * Created by nwu on 2/15/18.
 */
/*
 * This module was designed to provide a compact interface for the backend to interact with the database
 */

var models = require('./models');
var mongoose = require('mongoose');


/**
 * Returns a promise that will yield (err, question document) or throws an error (no questions)
 * @returns {Promise}
 */
function getRandomQuestion() {
  return models.Question.count().then(function (count) {
    if (count) {
      var random = Math.floor(Math.random() * count);
      return models.Question.findOne().skip(random)
    } else {
      throw new Error("No questions in database")
    }
  })
}

module.exports = {
  getRandomQuestion: getRandomQuestion
};