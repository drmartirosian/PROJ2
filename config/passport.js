const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const Blank = require('../models/blank');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  }, function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth
    Blank.findOne({'googleId': profile.id}, function(err, blank) {
      if (err) return cb(err);
      if (blank) {
        // returning user
        return cb(null, blank);
      } else {
        // we have a brand new user
        var newBlank = new Blank({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id
        });
        newBlank.save(function(err) {
          if (err) return cb(err);
          return cb(null, newBlank);
        });
      }
    });
  }
));

passport.serializeUser(function(blank, done) {
  done(null, blank.id);
});

passport.deserializeUser(function(id, done) {
  Blank.findById(id, function(err, blank) {
    done(err, blank);
  });
});



