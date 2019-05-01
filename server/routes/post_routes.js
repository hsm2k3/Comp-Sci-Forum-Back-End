const PostController = require('../controllers/index_controllers').posts;


const post_routes = (app) => {
    app.post('/api/posts', PostController.create); //Create new post
    app.get('/api/posts', PostController.list); //Get all posts
    app.get('/api/posts/id/:postId', PostController.searchById); //Get one specific post
    app.put('/api/posts/id/:postId', PostController.update); //Update a post
    app.delete('/api/posts/id/:postId', PostController.destroy); //Delete a post
};


module.exports = post_routes;
