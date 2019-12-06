const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Dbase = require('../models/dbase');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }, function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth
    Dbase.findOne({'googleId': profile.id}, function(err, dbase) {
      if (err) return cb(err);
      if (dbase) {
        // returning user
        return cb(null, dbase);
      } else {
        // we have a brand new user
        var newDbase = new Dbase({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
          avatar: profile.photos[0].value,
        });
        newDbase.save(function(err) {
          if (err) return cb(err);
          return cb(null, newDbase);
        });
      }
    });
  }
));

passport.serializeUser(function(dbase, done) {
  done(null, dbase.id);
});


passport.deserializeUser(function(id, done) {
  Dbase.findById(id, function(err, dbase) {
    done(err, dbase);
  });
});