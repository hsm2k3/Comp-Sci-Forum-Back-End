'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('Threads', [{
    	title: 'How to use git', 
    	content: 'This is a tutorial to learn how to use Git...',
    	is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 12,
      section_id: 6,
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
    return queryInterface.bulkDelete('Threads', null, {});
  }
};
