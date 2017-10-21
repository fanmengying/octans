var express = require('express');
var router = express.Router();
var mysql = require('../db.js');

router.get('/', function(req, res, next) {
    
        var context = {};
        mysql.query("SELECT name, role, email, creation FROM user;",  function(err, rows, fields) {
            if(err){
                next(err);
                return;
            } 
            context.result = rows;
            res.render('viewuser', context);
        });
   
    });
    
   






module.exports = router;


