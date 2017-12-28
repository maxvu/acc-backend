let express = require( 'express' );
let bodyParser = require( 'body-parser' );
let cookieParser = require( 'cookie-parser' );
let Database = require( './src/helpers/database.js' );

let config = require( './config.json' );
let IndexController = require( './src/controllers/index.js' );
let ThreadsController = require( './src/controllers/threads.js' );
let UsersController = require( './src/controllers/users.js' );

let views = require( './src/helpers/views.js' );

let app = express();
let db = new Database( config.db );

app.use( bodyParser.urlencoded({ extended: true }) );
app.use( cookieParser() );

app.use( function ( req, res, next ) {
    /*
        TODO
        If there's a session cookie provided, look it up.
        If it exists, attach the user to `req` for controller methods to use.
        Otherwise, ignore or delete it.
        (Be sure to call next() when you're done.)
    */
    next();
} );

app.use( '/public', express.static( './public' ) );

app.use( '/', IndexController( db ) );
app.use( '/threads', ThreadsController( db ) );
app.use( '/users', UsersController( db ) );

app.use( ( err, req, res, next ) => {
    /*
        Cough up errors using the errors view.
    */
    res.send( views.error( err.stack ) );
    next( err );
} );

app.listen( {
    port: config.port
}, function () {
    console.log( `Listening on port ${config.port}.` );
} ).on( 'error', function ( err ) {
    if ( err ) {
        console.log( `Couldn't listen on port ${config.port}. (Run as root?)` );
    }
} );
