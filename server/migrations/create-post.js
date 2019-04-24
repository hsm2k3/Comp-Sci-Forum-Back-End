'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
    
      content: {
        type: Sequelize.TEXT
      },
      creation_date: {
        type: Sequelize.TIME,
        allowNull: false,
        defaultValue: Sequelize.NOW

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      thread_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        OnDelete: 'CASCADE',
        references: {
          model: 'Threads',
          key: 'id',
          as: 'thread_id'
        }
      },

      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'user_id'
        }
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};