/*file to get to pages*/

var express = require('express'); //requiring our Express functionality,
var router = express.Router(); //attaching a "router" variable to Express's router method
var passportFacebook = require('../passport/facebook');
var passportGoogle = require('../passport/google');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/homePage', function(req, res) {
    res.render('homePage', { title: 'Home Page' });
});

/* GET login page*/
router.get('/login', function(req, res, next) {
    res.send('Go back and register!');
});

/* Facebook Authentication*/
router.get('/passport/facebook', passportFacebook.authenticate('facebook'));

router.get('/passport/facebook/callback',
    passportFacebook.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' },
    // function(req, res) {
    //     // Successful authentication
    //     res.redirect('/');
    // }
        ));

/* Google Authentication */
// router.get('/passport/google', passportGoogle.authenticate('google', { scope: ['profile'] }));
//
// router.get('/passport/google/callback',
//     passportGoogle.authenticate('google', {failureRedirect: '/login'}),
//     function(req,res){
//     //successful authentication
//         res.redirect('/');
//     });

//API class with Express
module.exports = (app) => {
    app.get('/api',(req,res) => res.status(200).send({
        message: 'Welcome to the Todos API!',
    }));

    /** Start - User create routes for creating new record **/
    app.post('/api/user', userController.create);
    /** End - Company create routes for creating new record**/
};



module.exports = router; //export our router function back to our app.
