'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    creation_date: {
      type: DataTypes.TIME
    },
  }, {});
  Section.associate = function(models) {
    // associations can be defined here
    Section.hasMany(models.Thread, {
      foreignKey: 'section_id'
    });

    Section.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
  };
  return Section;
};