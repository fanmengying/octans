var express = require('express');
var router = express.Router();
var mysql = require('../db.js');

router.get('/', function(req, res, next) {
  res.render('award');
});


module.exports = router;