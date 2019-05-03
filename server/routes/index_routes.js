const userRoutes = require('./user_routes');
const postRoutes = require('./post_routes');
const sectionRoutes = require('./section_routes');
const threadRoutes = require('./thread_routes');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the User API!'
	}));

	userRoutes(app);
	sectionRoutes(app);
	threadRoutes(app);
	postRoutes(app);

	app.post('/login',
			passport.authenticate('local',
				{ successRedirect: '/profile', failureRedirect: '/login' }),
				(req, res) => {
					// If this function gets called, authentication was successful.
					// `req.user` contains the authenticated user.
					res.redirect('/users/' + req.user.username);
				});

	// all get request will send index.html for react-router
	// to handle the route request
	app.get('*', (req, res) => {
		res.status(200).send({
			message: 'Wild Card!'
		})
	});
};