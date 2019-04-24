const userRoutes = require('./user_routes');
//const postRoutes = require('./post_routes');              todo: uncomment and add call postRoutes when built
const sectionRoutes = require('./section_routes');
const threadRoutes = require('./thread_routes');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the User API!'
	}));

	userRoutes(app);
	sectionRoutes(app);
	threadRoutes(app);

	// all get request will send index.html for react-router
	// to handle the route request
	app.get('*', (req, res) => {
		//res.sendFile(path.resolve(__dirname, '../public', 'index.html'));   this will be the route when we build the react part
		//res.sendFile(path.resolve(__dirname, 'midas-client', 'build', 'index.html'));
		res.status(200).send({
			message: 'Wild Card!'
		})
	});
};