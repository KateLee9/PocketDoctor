var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

//hook on sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('PocketDoctor','root', null, {
    dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

var init = require('./init');

passport.use(new GoogleStrategy({
        clientID: '457775293201-62fd8e06f3lb7b2i8j7fd5l9jbsb8gj5.apps.googleusercontent.com',
        clientSecret: 'xnV04pIcX3DvLoiXQPCFZOcL',
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

//serialize user into the session
init();

module.exports = passport;