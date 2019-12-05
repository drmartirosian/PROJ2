var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//METHOD-OVERRIDE
var methodOverride = require('method-override');

// authentication
var session = require('express-session');
var passport = require('passport');
// load the env vars
require('dotenv').config();
// create the Express app
var app = express();
// connect to the MongoDB with mongoose
require('./config/database');
// configure passport for our app
require('./config/passport');

//--------------------REQUIRE--------------------------------------//
var indexRouter = require('./routes/index');
var dBasesRouter = require('./routes/dbases');
var badgesRouter = require('./routes/badges');
//----------------------------------------------------------//

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//METHOD-OVERRIDE
app.use(methodOverride('_method'));
app.use(function(req, res, next) {
  console.log(req.method);
  next();
})
// SESSION middleware for PASSPORT
app.use(session({
  secret: 'SEIRocks!',
  resave: false,
  saveUninitialized: true
}));
//PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//-------------------MOUNT---------------------------------------//
app.use('/', indexRouter);
app.use('/dbases', dBasesRouter);
app.use('/dbases', badgesRouter);
//----------------------------------------------------------//

// CATCH 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// ERROR handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;