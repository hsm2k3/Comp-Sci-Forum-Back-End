const
    createError = require('http-errors'),
    expressSession = require('express-session'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require("cors"),
    cors_config = require('../middleware/cors');


module.exports = (app, express, passport) => {
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('view engine', 'ejs');
    app.use(cors());
    app.use(cors_config());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(bodyParser());
    app.use(expressSession({
        secret: 'how much wood could a wood chuck chuck if a wood chuck could chuck wood?',
        saveUninitialized: true,
        resave: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    // todo: figure out what needs to be configured to stop errors with this commented out code
    // // catch 404 and forward to error handler
    // app.use((req, res, next) => {
    //     next(createError(404));
    // });
    //
    // // error handler
    // app.use((err, req, res, next) => {
    //     // set locals, only providing error in development
    //     res.locals.message = err.message;
    //     res.locals.error = req.app.get('env') === 'development' ? err : {};
    //
    //     // render the error page
    //     res.status(err.status || 500);
    //     res.render('error');
    // });


    //  passport middleware
    require('../middleware/passport')(passport);
};