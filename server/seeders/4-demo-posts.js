'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('Posts', [

    {
    	content: 'Git sucks.',
      thread_id: 1, 
      user_id: 3,
    	createdAt: Sequelize.literal('NOW()'),
    	updatedAt: Sequelize.literal('NOW()')
    },

        {
      content: 'Git saved my ass',
      thread_id: 1, 
      user_id: 3,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

{
          content: 'Git saved my ass',
      thread_id: 1, 
      user_id: 3,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

{
          content: 'I was unsure about Git, but it saved my ass',
      thread_id: 1, 
      user_id: 4,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      content: 'This is a very cool tutorial, I have been trying to learn Git for my CSC 430 class.',
      thread_id: 1, 
      user_id: 4,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      content: 'Trello is amazing, I use it a lot but keep forgetting to use it consistently.',
      thread_id: 2, 
      user_id: 1,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      content: 'I do not like Trello, it is more work for me',
      thread_id: 2, 
      user_id: 4,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      content: 'I had no idea what Greedy Algorithms were when I was taking CSC 382, glad there is something to help people understand it here.',
      thread_id: 7, 
      user_id: 3,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      content: 'I want to be a project manager in the future, this thread is very helpful. It provides me with objectives to work towards to become a good project manager.',
      thread_id: 8, 
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
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
