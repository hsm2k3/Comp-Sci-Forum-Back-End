const PostController = require('../controllers/index_controllers').posts;


const section_routes = (app) => {
    app.post('/api/posts', PostController.create); //Create new section
    app.get('/api/posts', PostController.list); //Get all sections
    app.get('api/posts/:postId', PostController.list); //Get one specific section
    app.put('api/postss/:postId', PostController.update); //Update a section
    app.delete('api/posts/:postId', PostController.destroy); //Delete a section
};


module.exports = post_routes;
