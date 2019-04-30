const SectionController = require('../controllers/index_controllers').sections;


const section_routes = (app) => {
    app.post('/api/sections', SectionController.create); //Create new section
    app.get('/api/sections', SectionController.list); //Get all sections
    app.get('/api/sections/:sectionId', SectionController.list); //Get one specific section by id
    app.get('/api/sections/code/:sectionCode', SectionController.searchByCode); //Get one specific section by code
    app.get('/api/sections/title/:sectionTitle', SectionController.searchByTitle); //Get one specific section by title
    app.put('/api/sections/:sectionId', SectionController.update); //Update a section
    app.delete('/api/sections/:sectionId', SectionController.destroy); //Delete a section
};


module.exports = section_routes;