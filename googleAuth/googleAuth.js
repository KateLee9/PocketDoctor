import { google } from 'googleapis';

const googleConfig = {
    clientId: '457775293201-62fd8e06f3lb7b2i8j7fd5l9jbsb8gj5.apps.googleusercontent.com', // e.g. asdfghjkljhgfdsghjk.apps.googleusercontent.com
    clientSecret: 'xnV04pIcX3DvLoiXQPCFZOcL', // e.g. _ASDFA%DFASDFASDFASD#FAD-
    redirect: 'https://your-website.com/google-auth' // this must match your google api settings
};

/**
 * Create the google auth object which gives us access to talk to google's apis.
 */
function createConnection() {
    return new google.auth.OAuth2(
        googleConfig.clientId,
        googleConfig.clientSecret,
        googleConfig.redirect
    );
}