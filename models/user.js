'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        provider: DataTypes.STRING,
        facebook: DataTypes.STRING,
        google: DataTypes.STRING,
  }, {
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;

};


