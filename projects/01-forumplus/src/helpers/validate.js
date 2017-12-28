'use strict';

function isSet ( val ) {
    return val === undefined || val === null;
}

function isNumber ( val ) {
    return typeof val === 'number' || val instanceof Number;
}

function isInt ( val ) {
    return isNumber( val ) && Math.floor( val ) === val;
}

function isId ( val ) {
    return isNumber( val ) && val > 0;
}

function isString ( val ) {
    return typeof val === 'string' || val instanceof String;
}

function isSlug ( val ) {
    return isString( val ) && /[a-z0-9\-\_]{3,24}/i.exec( val );
}

function isDate ( val ) {
    return val instanceof Date;
}

module.exports = {
    isNumber,
    isInt,
    isId,
    isString,
    isSlug,
    isDate
};
