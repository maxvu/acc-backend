'use strict';
let express = require( 'express' );
let views = require( '../helpers/views.js' );
let humanTime = require( 'human-time' );
let markdown = require( 'markdown' ).markdown;

module.exports = function ( db ) {

    let router = express.Router();

    router.get( '/create-thread', function ( req, res ) {
        /*
            TODO
            If there's no user logged in, redirect to login page.
            Show the `createThread` view.
        */
    } );

    router.post( '/new', function ( req, res ) {
        /*
            TODO
            If there's no user logged in, redirect to login page.
            Create the thread, redirect to error if there's a problem.
            Use that thread's ID to create a message.
            Redirect to /threads/:thread-slug.
        */
    } );

    router.get( '/:slug', function ( req, res ) {
        /*
            TODO
            If there's no user logged in, redirect to login page.
            Retrieve the thread with the slug in `req.params`.
            If none, 404 and show error message.
            Otherwise, get its messages and pass both to `viewThread`.
        */
    } );

    router.post( '/:slug', function ( req, res ) {
        /*
            TODO
            If there's no user logged in, redirect to login page.
            Retrieve the thread with the slug in `req.params`.
            If none, 404 and show error message.
            Otherwise, create a message referencing its ID. (using markdown!)
            If OK, redriect to thread.
            Otherwise, show error.
        */
    } );

    return router;

};
