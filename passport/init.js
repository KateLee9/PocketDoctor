var passport = require('passport');
// var User = require('../models/user');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_5b563746e9de2a7','bc3248bee2e38f', "8823eb86", {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

module.exports = function() {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

};