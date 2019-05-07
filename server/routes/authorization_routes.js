const model = require('../models');
const User = model.users;

const authorization_routes = (app, passport) => {

    app.route('/login')
        .post(passport.authenticate('local', {
            successRedirect: '/profile',
            failureRedirect: '/auth/error'
        }),
        (req, res) => {
            const
                email = req.body.email,
                password = req.body.password;

            User.findByEmail({ where: { email: email } }).then(function (user) {
                if (!user) {
                    res.redirect('/login');
                } else if (!user.validPassword(password)) {
                    res.redirect('/login');
                } else {
                    req.session.user = user.dataValues;
                    res.redirect('/profile');
                }
            })});

    // app.post('/login',
    //     passport.authenticate('local', {
    //         successRedirect: '/profile',
    //         failureRedirect: '/auth/error'
    //     }),
    //     (req, res) => {
    //         console.log("DATA passed into login route: ", req);
    //         return res.status(200).json({
    //             id: req.user.id,
    //             email: req.user.email,
    //             firstName: req.user.first_name,
    //             lastName: req.user.last_name
    //     });
    //     }
    // );

    app.get('/logout', (req, res) => {
        req.logout();
        res.sendStatus(200);
    });

    app.get("/api/auth", passport.checkAuthentication, (req, res) => {
        console.log("Api/auth ran",req.user);
        res.json(req.user)
    });


    app.get('/profile',
        passport.redirectIfNotLoggedIn('/login'),
        (req, res) => {
            res.json({ msg: "This is the profile page for: " + req.user.email });
        });

};


module.exports = authorization_routes;