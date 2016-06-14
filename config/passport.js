'use strict';

/*
 * Module dependencies.
 */

/**
 * Expose
 */

module.exports = function (passport) {

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

};