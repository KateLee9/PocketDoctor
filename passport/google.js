var passport = require('passport');
var GoogleStrategy = require('passport-google');

//hook on sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('PocketDoctor','root', null, {
    dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

var init = require('./init');

passport.use(new GoogleStrategy({
        clientID: '457775293201-vj7cpa95fb6jpfvgjf5q469qa99ve9f6.apps.googleusercontent.com',
        clientSecret: 'cRxdWvl2sIqiJnh-H3ocWHZs',
        callbackURL: "http://localhost:3000/passport/google/callback"
    },

    function (accessToken, refreshToken, profile, cb,done) {

        var values = {google: profile.id, name: profile.user};
        User.findOrCreate({where: {google: profile.id}, values})
            .then(function (err,user) {
                return done(err, user);
            })
    }


));

init();

module.exports = passport;