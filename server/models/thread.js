'use strict';
module.exports = (sequelize, DataTypes) => {
  const Thread = sequelize.define('Thread', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    creation_date: {
      type: DataTypes.TIME,
      allowNull: false
    },
    is_locked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_stickied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    is_answered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  Thread.associate = function(models) {
    // associations can be defined here
    Thread.hasMany(models.Post, {
      foreignKey: 'thread_id',
      onDelete: 'CASCADE',
    });

   


  };
  return Thread;
};