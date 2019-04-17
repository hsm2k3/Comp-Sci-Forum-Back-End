const UserController = require('../controllers').users;
const SectionController = require('../controllers').sections;
const ThreadController = require('../controllers').threads;
const PostController = require('../controllers').posts;

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Welcome to the User API!',
	}));

	//Routes for 'users' table
	app.post('/api/users', UserController.create); //Create new user
	app.get('/api/users', UserController.list); //Get all users
	app.get('api/users/:userId', UserController.list); // Get specific user
	app.put('api/users/:userId', UserController.update); //Update a user
	app.delete('api/users/:userId', UserController.destroy); //Delete a user

	/*Routes for 'sections' table*/

	app.post('/api/sections', SectionController.create); //Create new section
	app.get('/api/sections', SectionController.list); //Get all sections
	app.get('api/sections/:sectionId', SectionController.list); //Get one specific section
	app.put('api/sections/:sectionId', SectionController.update); //Update a section
	app.delete('api/sections/:sectionId', SectionController.destroy); //Delete a section

	//Routes for Threads table

	app.post('/api/threads', ThreadController.create); //Create new thread
	app.get('/api/threads', ThreadController.list); // Show all threads
	app.get('/api/threads/:threadId', ThreadController.list); //Show specific thread
	app.put('api/threads/:threadId', ThreadController.update); //Updates a Thread
	app.delete('api/threads/:threadId', ThreadController.destroy); //Deletes a Thread

}