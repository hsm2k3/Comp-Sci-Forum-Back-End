const post = require('../models/').Post;

module.exports = {
	create(req, res) {
		return post
		.create({
			content: req.body.content,
			thread_id: req.body.content,
			user_id: req.body.content
		})
		.then(post => res.status(201).send(post))
		.catch(error => res.status(400).send(error));
	},

	list(req, res) {
		return post
		.findAll()
		.then(post => res.status(200).send(post))
		.catch(error => res.status(400).send(error));
},

//List specific post
	retrieve(req, res) {
		return post
		.findById(req.params.postId)
		.then(post => {
			if(!post) {
				return res.status(404).send({
					message: 'Post Not Found',
				});
			}
			return res.status(200).send(post);
		})
		.catch(error => res.status(400).send(error));
	},

//Update a user's information
	update(req, res) {
		return post
		.findById(req.params.postId)
		.then(post => {
			if(!post) {
				return res.status(404).send(
					{message: 'Post Not Found',
				});
			}
		return post
		.update({
			content: req.body.content || post.content,
		})
		.then(() => res.status(200).send(post))
		.catch((error) => res.status(400).send(error));
	})
	},

	//Destroy a specific user
	destroy(req, res) {
		return post
		.findById(req.params.postId)
		.then(post => {
			if(!post) {
				return res.status(400).send({
					message: 'Post Not Found',
				});
			}
			return post
			.destroy()
			.then(() => res.status(204).send())
			.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
	}
};