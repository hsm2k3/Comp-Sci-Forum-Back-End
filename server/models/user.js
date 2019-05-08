'use strict';
const bcrypt = require('bcrypt');

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

    password: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.BLOB
    }
  },
    {
       classMethods:{
         validPassword: function(password, passwd, done, user){
            bcrypt.compareSync(password, passwd, function(err, isMatch){
              if(err) console.log(err);
              if(isMatch){
                return done(null, user)
              }
              else{
                return done(null, false)
              }
            })
         },
         hashPassword: function(password){
           return bcrypt.hash(password, 10);
         }
       }
    }

  );


  // User.prototype.hashPassword = function(password){
  //   return bcrypt.hash(user.password, 10);
  // };
  //
  // User.prototype.passwordsMatch = (passwordSubmitted) => {
  //   return bcrypt.compareSync(passwordSubmitted, this.password);
  // };

  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Thread, {
      foreignKey: 'user_id',
    });

    User.hasMany(models.Post, {
      foreignKey: 'user_id',
    });
  };

  User.beforeCreate((user) =>
      new sequelize.Promise((resolve) => {
        bcrypt.hash(user.password, 10, (err, hashedPassword) => {
          resolve(hashedPassword);
        });
      }).then((hashedPassword) => {
        user.password = hashedPassword;
      })
  );
  return User;
};