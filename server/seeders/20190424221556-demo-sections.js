'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
