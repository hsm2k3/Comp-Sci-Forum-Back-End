const model = require('../models');
const User = model.users;
const express = require('express');
const router = express.Router();

const authorization_routes = (app, passport) => {
    router.post('/login',
        passport.authenticate('local', { failureRedirect: '/auth/error' }),
        (req, res) => {
            console.log("Hello from /login route");
            return res.status(200).json({
                id: req.user.id,
                firstName: req.user.firstName,
                lastName: req.user.lastName,
                email: req.user.email,
            });
        });

    // router.route('/login')
    //     .post(passport.authenticate('local', {
    //             successRedirect: '/profile',
    //             failureRedirect: '/login'
    //         }),
    //         (req, res) => {
    //             const
    //                 email = req.body.email,
    //                 password = req.body.password;
    //
    //             User.findOne({ where: { email: email } }).then(function (user) {
    //                 if (!user) {
    //                     console.log("DEBUG: No user",user);
    //                     res.redirect('/login');
    //                 } else if (!user.validPassword(password)) {
    //                     console.log("DEBUG: Bad password",user,password);
    //                     res.redirect('/login');
    //                 } else {
    //                     req.session.user = user.dataValues;
    //                     res.redirect('/profile');
    //                 }
    //             })
    //         }
    //     );

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