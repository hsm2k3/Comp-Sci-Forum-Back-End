const app = express();

//  server config
  require('./server/configs/server_config')(app);

//  cors middleware
  require('./server/middleware/cors')(app);

//  Routes
  require('./server/routes/index_routes')(app);


module.exports = app;