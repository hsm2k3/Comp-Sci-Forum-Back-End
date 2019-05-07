const
    LocalStrategy = require('passport-local').Strategy,
    env = process.env.NODE_ENV || 'development',
    config = require(__dirname + '/../configs/database_config.json')[env],
    bcrypt = require('bcrypt'),
    Sequelize = require('sequelize');
    model = require('../models/');
    User = model.users;

let sequelize = null;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

passwordsMatch = (passwordSubmitted, storedPassword) => {
    return bcrypt.compareSync(passwordSubmitted, storedPassword);
};


module.exports = (passport) => {

    passport.use(new LocalStrategy(
        // (email, password, done) => {
        {
            usernameField: 'email'
        },
        (email, password, done) => {
            const req = {req:{
              params:{
                  email: email
              }
            }};
            console.log("REQ: ", req);
            User.searchByEmail(req).then((user) => {
                console.log(user);
                if (!user || passwordsMatch(password, user.password) === false) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user, { message: 'Successfully Logged In!' });
            });
            // User.findOne({
            //     where: { email: email },
            // }).then((user) => {
            //     console.log(user);
            //     if (!user || passwordsMatch(password, user.password) === false) {
            //         return done(null, false, { message: 'Incorrect password.' });
            //     }
            //
            //     return done(null, user, { message: 'Successfully Logged In!' });
            // });
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.checkAuthentication = (req, res, next) => {
        if(req.isAuthenticated()){
            console.log("Authentication Successful");
            //req.isAuthenticated() will return true if user is logged in
            next();
        } else{
            console.log("Authentication Unsuccessful");
            res.redirect("/login");
        }
    };

    passport.redirectIfLoggedIn = (route) =>
        (req, res, next) => (req.user ? res.redirect(route) : next());

    passport.redirectIfNotLoggedIn = (route) =>
        (req, res, next) => (req.user ? next() : res.redirect(route));
};