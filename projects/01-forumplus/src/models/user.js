'use strict';
let _ = require( '../helpers/validate.js' );

module.exports = function User ( db, attrs ) {

    Object.assign( this, attrs );

    this.isValid = function () {
        if ( _.isSet( this.id ) && !_.isId( this.id ) )
            return false;
        if ( !_.isSlug( this.name ) )
            return false;
        if ( !_.isDate( this.created ) )
            return false;
        return true;
    };

};
