const authorization_routes = (app, passport) => {
    app.post('/login', passport.authenticate('local',
        { failureRedirect: '/auth/error' }),
            (req, res) => {
                return res.status(200).json({
                    id: req.user.id,
                    email: req.user.email,
                    firstName: req.user.first_name,
                    lastName: req.user.last_name
                });
            }
    );

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