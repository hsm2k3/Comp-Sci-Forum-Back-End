const ThreadController = require('../controllers/index_controllers').threads;


const thread_routes = (app) => {
    app.post('/api/threads', ThreadController.create); //Create new thread
    app.get('/api/threads', ThreadController.list); // Show all threads
    app.get('/api/threads/id/:threadId', ThreadController.searchById); //Show specific thread
    app.put('/api/threads/id/:threadId', ThreadController.update); //Updates a Thread
    app.delete('/api/threads/id/:threadId', ThreadController.destroy); //Deletes a Thread
};


module.exports = thread_routes;