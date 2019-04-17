'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
    },
    creation_date: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, );
  Section.associate = function(models) {
    // associations can be defined here
    Section.hasMany(models.Thread, {
      foreignKey: 'section_id',
      allowNull: false
    });

    Section.belongsTo(models.User, {
      foreignKey: 'user_id',
      allowNull: false    
    });
  };
  return Section;
};