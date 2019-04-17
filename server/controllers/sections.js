const section = require('../models').Section;

module.exports = {
	create(req, res) {
		return section
		.create({
			title: req.body.title,
			description: req.body.description,
			user_id: req.body.user_id,
		})
		.then(user => res.status(201).send(user))
		.catch(error => res.status(400).send(error));
	},

	//List all sections
	list(req, res) {
		return section
		.findAll()
		.then(section => res.status(201).send(section))
		.catch(error => res.status(400).send(error));
	},

	//List specific section
	retrieve(req, res) {
		return section
		.findById(req.params.sectionId, {
			include: [{
				model: Thread,
				as: 'Threads',
			}],
		})
		.then(section => {
			if(!section) {
				return res.status(404).send({
					message: 'Section Not Found',
				});
			}
			return res.status(200).send(section);
		})
		.catch(error => res.status(400).send(error));
	},


	//Update a section
	update(req, res) {
		return section
		.findById(req.params.sectionId)
		.then(section => {
			if(!section) {
				return res.status(404).send(
					{message: 'Section Not Found',
				});
			}
		return section
		.update({
			title: req.body.title || section.title,
			description : req.body.description || section.decription,
		})
		.then(() => res.status(200).send(section))
		.catch((error) => res.status(400).send(error));
	})
	},

	//Destroy a specific section
	destroy(req, res) {
		return section
		.findById(req.params.sectionId)
		.then(section => {
			if(!section) {
				return res.status(400).send({
					message: 'Section Not Found',
				});
			}
			return section
			.destroy()
			.then(() => res.status(204).send())
			.catch(error => res.status(400).send(error));
		})
		.catch(error => res.status(400).send(error));
	}
}