'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('Threads', [
    {
    	title: 'How to use Git', 
    	content: 'Git is one of the most important tools in the industry. This is a tutorial to help you learn how to make use of it.',
    	is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 1,
      section_id: 1,
    	createdAt: Sequelize.literal('NOW()'),
    	updatedAt: Sequelize.literal('NOW()')
    },

    {
      title: 'How to use Trello', 
      content: 'Trello is an online web app used for task managment. It allows you and your team to assign tasks to do, keep track of updates to your project, and allows for better organization.',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 2,
      section_id: 1,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      title: 'How to use command terminal', 
      content: 'The command terminal is a tool that is used as much as google. This thread provides a tutorial and allows a discussion about it..',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 3,
      section_id: 1,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      title: 'C# Basics', 
      content: 'If you want to use Unity, you need to learn C# basics. If you know C, or C++, learning C# will not be too complicated. It is a very similar language.',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 2,
      section_id: 2,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

     {
      title: 'Software Development Life Cycle', 
      content: 'The place for software development life cycle discussion.',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 3,
      section_id: 3,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      title: 'List of Important Data Structures', 
      content: 'This is a list of all the important data structures you should know. These are commonly used in the field.',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 3,
      section_id: 4,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      title: 'Greedy Algorithms', 
      content: 'Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. So the problems where choosing locally optimal also leads to global solution are best fit for Greedy.',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 1,
      section_id: 5,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      title: 'Guide To Project Managment', 
      content: 'This is a thread discussing the qualities, and work ethic a project manager needs.',
      is_locked: false,
      is_stickied: false,
      is_answered: false,
      user_id: 4,
      section_id: 6,
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
    return queryInterface.bulkDelete('Threads', null, {});
  }
};
