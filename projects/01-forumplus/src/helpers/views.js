'use strict';
let fs = require( 'fs' );
let Mustache = require( 'mustache' );

/*
    This "helper" builds pages -- effectively turning each one into a function.
*/

let viewsDir = __dirname + '/../views';
let views = {
    base          : '/partials/base.htm',
    error         : '/error.htm',
    index         : '/index.htm',
    login         : '/login.htm',
    createThread  : '/create-thread.htm',
    viewThread    : '/view-thread.htm',
    viewUser      : '/view-user.htm'
};

for ( let viewName in views ) {
    views[ viewName ] = fs.readFileSync(
        viewsDir + views[ viewName ]
    ).toString( 'utf-8' );
}

module.exports = {

    index : function ( user, threads ) {
        return Mustache.render( views.base, {
            title : "ForumPlus",
            user : user,
            content : Mustache.render( views.index, {
                user: user,
                threads : threads
            } )
        } )
    },

    login : function () {
        return Mustache.render( views.base, {
            title : "ForumPlus",
            user : null,
            content : Mustache.render( views.login )
        } );
    },

    createThread : function ( user ) {
        return Mustache.render( views.base, {
            title : "ForumPlus",
            user : null,
            content : Mustache.render( views.createThread, {
                user : user
            } )
        } );
    },

    viewThread : function ( user, thread, messages ) {
        return Mustache.render( views.base, {
            title : thread.title,
            user : user,
            content : Mustache.render( views.viewThread, {
                user : user,
                thread : thread,
                messages : messages
            } )
        } )
    },

    viewUser : function ( signedInUser, viewedUser, viewedUserMessages ) {
        return Mustache.render( views.base, {
            title : `User ${viewedUser.name}`,
            user: signedInUser,
            content : Mustache.render( views.viewUser, {
                user : viewedUser,
                messages : viewedUserMessages
            } )
        } );
    },

    error : function ( err ) {
        return Mustache.render( views.base, {
            title : "ERROR",
            content : Mustache.render( views.error, {
                error : err
            } )
        } );
    }

};
