'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {

    content: {
      type: DataTypes.TEXT
    },

    creation_date: {
      allowNull: false,
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW

    }, });
  Post.associate = function(models) {
    // associations can be defined here

  };
  return Post;
};