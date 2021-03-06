var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); //instantiates Express assigns our app variable

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

//passport middleware
// app.use(session({
//     secret: 'keyboard cat',
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(passport.initialize());
// app.use(passport.session());

//trial code
    app.use(express.static('public'));
    app.use(session({ secret: 'keyboard cat' }));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(passport.initialize());
    app.use(passport.session());

//adding routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function(){
    console.log("Nice!");
}).catch(function(err){
    console.log(err, "Something went wrong with database!");
});

//Require routes into the application
// require("./routes")(app); this line requires fixing
app.get("*",(req,res) => res.status(200).send({
    message: 'Welcome to this',
}));



module.exports = app;

