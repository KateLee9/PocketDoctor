var ids = {
    github: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    linkedin: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    },
    twitter: {
        consumerKey: 'get_your_own',
        consumerSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    },
    facebook: {
        app_id: '1900216703426978',
        app_secret:'f2c2ee6069de323109cb9347fad01026',
        callbackURL:'http://localhost:3000/passport/facebook/callback'
    },
    google: {
        consumerKey: '457775293201-vj7cpa95fb6jpfvgjf5q469qa99ve9f6.apps.googleusercontent.com',
        consumerSecret: 'cRxdWvl2sIqiJnh-H3ocWHZs',
        callbackURL: "http://localhost:3000/passport/google/callback"
    },
};

module.exports = ids;