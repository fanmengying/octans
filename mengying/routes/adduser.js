var express = require('express');
var router = express.Router();
var mysql = require('../db.js');

router.get('/', function(req, res, next) {
   res.render('adduser'); 
});


router.post('/', function(req, res, next) {
    if (req.body['submit'] == "submit") {
        var type = "user"
        if (req.body.accounttype == '1') {
           type = "user";
        } else {
           type = "admin";
        }
        mysql.query("INSERT INTO user (name, role, email, password) VALUES (?,?, ?, ?);", 
            [req.body.name || null, type, req.body.email, req.body.password], function(err, rows, fields) {
                if(err) {
                        next(err);
                        return;
                } 
                res.redirect('/viewuser'); 
            });
            
       } else {
           res.redirect('/viewuser');
       }
      
});

module.exports = router;
