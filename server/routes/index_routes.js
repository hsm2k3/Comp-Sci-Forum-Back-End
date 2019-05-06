const userRoutes = require('./user_routes');
const postRoutes = require('./post_routes');
const sectionRoutes = require('./section_routes');
const threadRoutes = require('./thread_routes');
const authorizationRoutes = require('./authorization_routes');

module.exports = (app, passport) => {
	app.get('/', (req, res) => {
		if(req.session.page_views){
			req.session.page_views++;
			res.send("You visited this page " + req.session.page_views + " times");
		} else {
			req.session.page_views = 1;
			res.send("Welcome to this page for the first time!");
		}
	});

	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the User API!'
	}));

	//	Begin API routes
		userRoutes(app);
		sectionRoutes(app);
		threadRoutes(app);
		postRoutes(app);
	//	End API routes

	authorizationRoutes(app, passport);

	// all get request will send index.html for react-router
	// to handle the route request
	app.get('*', (req, res) => {
		res.status(200).send({
			message: 'Wild Card!'
		})
	});
};