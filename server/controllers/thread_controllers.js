const thread = require('../models').Thread;
const post = require('../models').Post;

module.exports = {
	create(req, res) {
		return thread
		.create({
			title: req.body.title,
			content: req.body.content,
			user_id: req.body.user_id,
			section_id: req.body.section_id,
		})
		.then(thread => res.status(201).send(thread))
		.catch(error => res.status(400).send(error));
	},

	//List all threads
	list(req, res) {
		return thread
		.findAll()
		.then(thread => res.status(201).send(thread))
		.catch(error => res.status(400).send(error));
	},

//Get section by id
	searchById(req, res) {
		return thread
			.findOne({
				where: {
					id: req.params.threadId
				},
				include: [
					{
						model: post
					}
				]
			})
			.then(thread => {
				if(!thread) {
					return res.status(404).send({
						message: 'Thread Not Found',
					});
				}
				return res.status(200).send(thread);
			})
			.catch(error => res.status(400).send(error));
	},


//Update a thread's information
	update(req, res) {
		return thread
		.findById(req.params.threadId)
		.then(thread => {
			if(!thread) {
				return res.status(404).send(
					{message: 'Thread Not Found',
				});
			}
		return thread
		.update({
			content: req.body.content || thread.content,
			section_id: req.body.section_id || thread.section_id,
			updatedAt: req.body.updatedAt || thread.updatedAt,
			is_locked: req.body.is_locked || thread.is_locked,
			is_stickied: req.body.is_stickied || thread.is_stickied,
			is_answered: req.body.is_answered || thread.is_answered,
		})
		.then(() => res.status(200).send(thread))
		.catch((error) => res.status(400).send(error));
	})
	},

		//Destroy a specific thread
	destroy(req, res) {
		return thread
		.findById(req.params.threadId)
		.then(thread => {
			if(!thread) {
				return res.status(400).send({
					message: 'Thread Not Found',
				});
			}
			return thread
			.destroy()
			.then(() => res.status(204).send())
			.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
	}
};