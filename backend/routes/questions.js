var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET all questions */
router.get('/random', function(req, res, next) {
  db.accessor.getRandomQuestion().then(function(question) {
    res.json(question);
  }).catch(function(err) {
    console.error(err);
    res.status(500);
    next(err);
  })
});

module.exports = router;
