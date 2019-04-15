const UserController = require('../controllers').user;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the User API!',
	}));

	app.post('/api/users', UserController.create);

	app.get('/api/users', UserController.list);
}