const
    LocalStrategy = require('passport-local').Strategy,
    env = process.env.NODE_ENV || 'development',
    config = require(__dirname + '/../configs/database_config.json')[env],
    bcrypt = require('bcrypt'),
    Sequelize = require('sequelize');

let sequelize = null;

if (config.use_env_variable) {

    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
const User = require("../models/user")(sequelize, Sequelize);


module.exports = (passport) => {
    passport.use(new LocalStrategy({
            usernameField: 'email'
        },
        function(email, password, done) {
            User.findOne({ email: email }, function (err, user) {
                console.log("DEBUG passport: ", user);
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.passwordMatch(password)) { return done(null, false); }
                return done(null, user);
            });
        }
    ));
    // passport.use(new LocalStrategy(
    //     // (email, password, done) => {
    //     {
    //         usernameField: 'email'
    //     },
    //     (email, password, done) => {
    //         User.searchByEmail({where}).then((user) => {
    //             console.log(user);
    //             if (!user || passwordsMatch(password, user.password) === false) {
    //                 return done(null, false, { message: 'Incorrect password.' });
    //             }
    //
    //             return done(null, user, { message: 'Successfully Logged In!' });
    //         });
    //         // User.findOne({
    //         //     where: { email: email },
    //         // }).then((user) => {
    //         //     console.log(user);
    //         //     if (!user || passwordsMatch(password, user.password) === false) {
    //         //         return done(null, false, { message: 'Incorrect password.' });
    //         //     }
    //         //
    //         //     return done(null, user, { message: 'Successfully Logged In!' });
    //         // });
    //     })
    // );

    // serializeUser writes cookie
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    //  deserializeUser reads cookie
    passport.deserializeUser((id, done) => {
        User.searchById(id, (err, user) => {
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