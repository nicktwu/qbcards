/**
 * Created by nwu on 2/15/18.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: String,
  answers: [String],
  forbidden: [String],
  crucial: [String],
  difficulty: Number
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = {
  Question: Question
};