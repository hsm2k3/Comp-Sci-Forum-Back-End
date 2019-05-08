const section = require('../models').Section;
const thread = require('../models').Thread;
const post = require('../models').Post;

module.exports = {
	create(req, res) {
		return section
		.create({
			title: req.body.title,
			code: req.body.code,
			description: req.body.description,
			user_id: req.body.user_id,
		})
		.then(section => res.status(201).send(section))
		.catch(error => res.status(400).send(error));
	},

	//List all sections
	list(req, res) {
		return section
		.findAll()
		.then(section => {
			console.log(section);
			res.status(201).send(section)
		})
		.catch(error => res.status(400).send(error));
	},


	//Get section by id
	searchById(req, res) {
		return section
			.findOne({
				where: {
					id: req.params.sectionId,
				},

				include:[
					{
						model: thread,
					}
				]
				
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

	//Get section by code
	searchByCode(req, res) {
		return section
			.findOne({
				where: {
					code: req.params.sectionCode
				},
				include:[
					{
						model: thread,
					}
				]
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

	//Get section by title
	searchByTitle(req, res) {
		return section
			.findOne({
				where: {
					title: req.params.sectionTitle
				},
				include:[
					{
						model: thread,
					}
				]
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
		.findOne({
				where: {
					id: req.params.sectionId,
				},
			})
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
				.findOne({
				where: {
					id: req.params.sectionId,
				},
			})
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