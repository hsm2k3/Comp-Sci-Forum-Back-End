const user = require('../models/').User;

module.exports = {
	create(req, res) {
		return user
		.create({
			email: req.body.email,
			username: req.body.username,
			date_joined: req.body.date_joined,
			is_admin: req.body.is_admin,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			picture: req.body.picture,
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		return user
		.findAll()
		.then(user => res.status(200).send(user))
		.catch(error => res.status(400).send(error));
},

//List specific user
	retrieve(req, res) {
		return user
		.findById(req.params.userId, {
			include: [{
				model: Thread,
				as: 'Threads',
			}],
		})
		.then(user => {
			if(!user) {
				return res.status(404).send({
					message: 'User Not Found',
				});
			}
			return res.status(200).send(user);
		})
		.catch(error => res.status(400).send(error));
	},

//Update a user's information
	update(req, res) {
		return user
		.findById(req.params.userId)
		.then(user => {
			if(!user) {
				return res.status(404).send(
					{message: 'User Not Found',
				});
			}
		return user
		.update({
			picture: req.body.picture || user.picture,
			is_admin: req.body.is_admin || user.is_admin,
		})
		.then(() => res.status(200).send(section))
		.catch((error) => res.status(400).send(error));
	})
	},

	//Destroy a specific user
	destroy(req, res) {
		return user
		.findById(req.params.userId)
		.then(user => {
			if(!user) {
				return res.status(400).send({
					message: 'User Not Found',
				});
			}
			return user
			.destroy()
			.then(() => res.status(204).send())
			.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
	}
};