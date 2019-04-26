'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('Users', [{
    	email: 'XJohnDoe@test.com',
    	username: 'XJohn.Doe',
        is_admin: false,
    	first_name: 'John',
    	last_name: 'Doe',
        picture: null,
    	createdAt: Sequelize.literal('NOW()'),
    	updatedAt: Sequelize.literal('NOW()')
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
