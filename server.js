const
    express = require('express'),
    app = express(),
    passport = require('passport');

//  server config
  require('./server/configs/server_config')(app, express, passport);

//  Routes
  require('./server/routes/index_routes')(app, passport);


module.exports = app;