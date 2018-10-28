var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

//hook on sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('heroku_5b563746e9de2a7','bc3248bee2e38f', "8823eb86", {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

var config = require('../_config');
var init = require('./init');

passport.use(new FacebookStrategy({
        clientID: 1900216703426978,
        clientSecret: 'f2c2ee6069de323109cb9347fad01026',
        callbackURL: "https://kate-pocketdoctor.herokuapp.com/passport/facebook/callback",
        passReqToCallback: true
    },
    function (req, accessToken, refreshToken, profile, done) {

        var values = {facebook: profile.id , name: profile.displayName};
            User.findOrCreate({
                where: {
                    facebook: profile.id,
                    name: profile.displayName,
                },
                values})
                .spread((user, created) => {

                    console.log(created);
                    return done(null,profile);

                })

        // User.findOne({
        //     where: {facebook: profile.id}
        // }, function (err, user) {
        //     if (err) {
        //         return done(err);
        //     } //s found... so create a new user with values from Facebook (all the profile. stuff)
        //     if (!user) {
        //         user = new User({
        //             name: profile.name,
        //             username: profile.displayName,
        //             email: profile.emails[0].value,
        //
        //             provider: 'facebook',
        //             //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
        //             facebook: profile._json
        //         });
        //         user.save(function (err) {
        //             if (err) console.log(err);
        //             return done(err, user);
        //         });
        //         return 'this works';
        //     } else {
        //         //found user. Return
        //         return done(err, user);
        //     }
        // })

    }));

init();

module.exports = passport;
