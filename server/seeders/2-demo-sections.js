'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('Sections', [
    {
      code: '',
    	title: 'Tips & Tricks', 
    	description: 'Dedicated to the Algorithms class at CSI, and everything one needs to be prepared for technical job interviews. ',
    	user_id: 1,
    	createdAt: Sequelize.literal('NOW()'),
    	updatedAt: Sequelize.literal('NOW()')
    },

     {
      code: 'CSC227',
      title: 'Video Game Design', 
      description: 'Dedicated to beginner game design class. Learn C#, Unity, and proper game design.',
      user_id: 3,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      code: 'CSC326',
      title: 'Software Design', 
      description: 'The introductory software design class at CSI. Learn all about sofware life cycle and good design procedures.',
      user_id: 2,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

     {
      code: 'CSC330',
      title: 'Data Structures', 
      description: 'Dedicated to the data structures class at CSI, and all the help to learn everything about binary trees, hashmaps and all the rest. ',
      user_id: 2,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      code: 'CSC382',
      title: 'Algorithms', 
      description: 'Dedicated to the Algorithms class at CSI, and everything one needs to be prepared for technical job interviews. ',
      user_id: 3,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      code: 'CSC430',
      title: 'Software Engineering', 
      description: 'Dedicated to the Software Engineering class at CSI, and all you need to excel in the field of software development. ',
      user_id: 1,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Sections', null, {});
  }
};
