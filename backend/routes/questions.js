var express = require('express');
var router = express.Router();
const db_uri = process.env.DB_URI;

const db_name = "qb";
const question_collection = "questions";

/* GET all questions */
router.get('/', function(req, res, next) { 
  res.json({'hello':"world"});
});

module.exports = router;
