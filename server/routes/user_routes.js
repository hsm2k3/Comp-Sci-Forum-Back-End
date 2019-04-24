const UserController = require('../controllers').users;


const user_routes = (app) => {
    app.post('/api/users', UserController.create); //Create new user
    app.get('/api/users', UserController.list); //Get all users
    app.get('api/users/:userId', UserController.list); // Get specific user
    app.put('api/users/:userId', UserController.update); //Update a user
    app.delete('api/users/:userId', UserController.destroy); //Delete a user
};


module.exports = user_routes;