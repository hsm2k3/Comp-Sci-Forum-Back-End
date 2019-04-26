'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    
    last_active: {
      type: DataTypes.DATE,
    },
    picture: {
      type: DataTypes.BLOB,


    }, });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Thread, {
      foreignKey: 'user_id',
    });

    User.hasMany(models.Post, {
      foreignKey: 'user_id',
    });
  };
  return User;
};