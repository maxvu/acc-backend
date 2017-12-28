'use strict';
let _ = require( '../helpers/validate.js' );

function Session ( db, attrs ) {

    Object.assign( this, attrs );

    this.isValid = function () {
        if ( _.isSet( this.id ) && !_.isId( this.id ) )
            return false;
        if ( !_.isString( this.token ) )
            return false;
        if ( this.token.length < 10 || this.token.length > 64 )
            return false;
        if ( !_.isId( this.user ) )
            return false;
        if ( !_.isDate( this.created ) )
            return false;
        return true;
    };


};

Session.generateToken = function (
    length = 48,
    pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
) {
    if ( typeof( length ) !== 'number' )
        throw new Error( `Invalid token length: ${length}.` );
    let token = '';
    for ( let i = 0; i < length; i++ )
        token += pool[ Math.floor( Math.random() * pool.length ) ];
    return token;
}

module.exports = Session;
