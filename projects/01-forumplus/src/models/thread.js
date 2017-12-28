'use strict';
let _ = require( '../helpers/validate.js' );

module.exports = function Thread ( db, attrs ) {

    Object.assign( this, attrs );

    this.isValid = function () {
        if ( _.isSet( this.id ) && !_.isId( this.id ) )
            return false;
        if ( !_.isString( this.title ) )
            return false;
        if ( this.title.length === 0 || this.title.length > 128 );
            return false;
        if ( !_.isSlug( this.slug ) )
            return false;
        if ( !_.isId( this.creator ) )
            return false;
        if ( !_.isDate( this.created ) )
            return false;
        return true;
    };

};
