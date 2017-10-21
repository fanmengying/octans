var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('./db.js');
var handlebars = require('express-handlebars').create({defaultLayout:`main`});
var session = require('express-session');
var flash = require('connect-flash'); 



var viewuser = require('./routes/viewuser.js');
var login = require('./routes/login.js');
var adduser = require('./routes/adduser.js');
var signup = require('./routes/signup.js');
var award = require('./routes/award.js');
var edit = require('./routes/edit.js');

var app = express();
app.use(flash());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/', login);
app.use('/viewuser', viewuser);
app.use('/adduser', adduser);
app.use('/signup', signup);
app.use('/award', award);
app.use('/edit', edit);


//test server
app.get('/test',function(req,res){
  res.type('text/plain');
  res.send('Testing!');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  context = {};
  context.status = err.status || 500;
  context.message = err.message || 'Server Error';
  res.render('error.handlebars', context);
});




app.listen(8081, function(){
  console.log("listening!");
});

module.exports = app;
