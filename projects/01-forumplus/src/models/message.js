'use strict';
let _ = require( '../helpers/validate.js' );

module.exports = function Message ( db, attrs ) {

    Object.assign( this, attrs );

    this.isValid = function () {
        if ( _.isSet( this.id ) && !_.isId( this.id ) )
            return false;
        if ( !_.isId( this.thread ) )
            return false;
        if ( !_.isId( this.author ) )
            return false;
        if ( !_.isDate( this.created ) )
            return false;
        if ( !_.isString( this.body ) )
            return false;
        if ( this.body.length == 0 || this.body.length > 2000 )
            return false;
        return true;
    };

};
