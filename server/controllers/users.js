const User = require('../models/').User;

module.exports = {
	create(req, res) {
		return User
		.create({
			email: req.body.email,
			username: req.body.username,
			date_joined: req.body.date_joined,
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		return User
		.all()
		.then(user => res.status(200).send(user))
		.catch(error => res.status(400).send(error));
},