const Sequelize = require('sequelize');
const sequelize = new Sequelize('PocketDoctor','root', null, {
    dialect: 'mysql',
});
const User = require('./models/user')(sequelize, Sequelize);

module.exports = { User };