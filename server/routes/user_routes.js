const UserController = require('../controllers/index_controllers').users;


const user_routes = (app) => {
    app.post('/api/users', UserController.create); //Create new user
    app.get('/api/users', UserController.list); //Get all users
    app.get('/api/users/id/:userId', UserController.searchById); // Get specific user
    app.get('/api/users/email/:email', UserController.searchByEmail);
    app.put('/api/users/:userId', UserController.update); //Update a user
    app.delete('/api/users/:userId', UserController.destroy); //Delete a user
};


module.exports = user_routes;