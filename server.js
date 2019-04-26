const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");

const app = express();


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//cors middleware
app.use((req, res, next) => {

  //allow access to our API with these urls
  let allowedOrigins = [
    'http://127.0.0.1:3003',
    'http://localhost:3001',
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'https://aqueous-castle-51032.herokuapp.com'
  ];

  let origin = req.headers.origin;

  //check if the origin is a part of the allowedOrigins array
  //if it is, set the header and allow access.
  if(allowedOrigins.indexOf(origin) > -1){
    res.header('Access-Control-Allow-Origin', origin);
  }

  //Request methods you wish to allow
  res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  //Request headers you wish to allow
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );

  //run controller logic
  next();
});

//  Routes
require('./server/routes/index_routes')(app);

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

module.exports = app;