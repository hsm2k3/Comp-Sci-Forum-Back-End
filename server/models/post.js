'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    
    content: {
      type: DataTypes.TEXT
    },

    creation_date: {
      type: DataTypes.TIME

  }, });
  Post.associate = function(models) {
    // associations can be defined here

  };
  return Post;
};