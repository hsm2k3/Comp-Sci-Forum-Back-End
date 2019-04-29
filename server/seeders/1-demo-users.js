'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // todo: complete sections seeder
    return queryInterface.bulkInsert('Users', [{
    	email: 'Yussef.Saidi@test.com',
    	username: 'Yussef.Saidi',
        is_admin: true,
    	first_name: 'Yussef',
    	last_name: 'Saidi',
      picture: null,
      createdAt: Sequelize.literal('NOW()'),
    	updatedAt: Sequelize.literal('NOW()')
    },

    {
        email: 'Mike.Bajor@test.com',
      username: 'Mike.Bajor',
        is_admin: true,
      first_name: 'Mike',
      last_name: 'Bajor',
      picture: null,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },
    
    {
      email: 'Alex.Braverman@test.com',
      username: 'Alex.Braverman',
        is_admin: true,
      first_name: 'Alex',
      last_name: 'Braverman',
      picture: null,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    },

    {
      email: 'NewUser@test.com',
      username: 'New.User',
        is_admin: false,
      first_name: 'New',
      last_name: 'User',
      picture: null,
      createdAt: Sequelize.literal('NOW()'),
      updatedAt: Sequelize.literal('NOW()')
    }],
       {});

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
