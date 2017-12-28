var express = require( 'express' );
let views = require( '../helpers/views.js' );

module.exports = function ( db ) {

    var router = express.Router();

    router.get( '/:name', function ( req, res ) {
        /*
            If there's no user logged in, redirect to login page.
            Retrieve the user with the name in `req.params`.
            If no such user, 404 and error.
            Otherwise, get all their messages.
            Pass both to `viewUser` page.
        */
    } );

    return router;

};
