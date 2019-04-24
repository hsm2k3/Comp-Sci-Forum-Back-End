const SectionController = require('../controllers/index_controllers').sections;


const section_routes = (app) => {
    app.post('/api/sections', SectionController.create); //Create new section
    app.get('/api/sections', SectionController.list); //Get all sections
    app.get('api/sections/:sectionId', SectionController.list); //Get one specific section
    app.put('api/sections/:sectionId', SectionController.update); //Update a section
    app.delete('api/sections/:sectionId', SectionController.destroy); //Delete a section
};


module.exports = section_routes;