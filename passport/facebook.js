var passport = require('passport');
var FacebookStrategy = require('passport-facebook');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('PocketDoctor','root', null, {
    dialect: 'mysql',
});
const User = require('../models/user')(sequelize, Sequelize);

// const User = require('../database');

var config = require('../_config');
var init = require('./init');

passport.use(new FacebookStrategy({
        clientID: 1900216703426978,
        clientSecret: 'f2c2ee6069de323109cb9347fad01026',
        callbackURL: "http://localhost:3000/passport/facebook/callback"
    },
    function (accessToken, refreshToken, profile, cb) {

        // var values = {id: profile.id, name: profile.user};
        //     User.findOrCreate({where: {id: profile.id}}, values)
        //         .then(function () {
        //             return done(err, user);
        //         })
        // }

        User.findOne({
            where: {id: profile.id}
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            //No user was found... so create a new user with values from Facebook (all the profile. stuff)
            if (!user) {
                user = new User({
                    name: profile.displayName,
                    username: profile.username,
                    email: profile.emails[0].value,

                    provider: 'facebook',
                    //now in the future searching on User.findOne({'facebook.id': profile.id } will match because of this next line
                    facebook: profile._json
                });
                user.save(function (err) {
                    if (err) console.log(err);
                    return done(err, user);
                });
                return 'this works';
            } else {
                //found user. Return
                return done(err, user);
            }
        })

    }));

init();

module.exports = passport;
