const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/users');

// Check if email is already regestered 

module.exports = function(passport) {
	passport.use(
		new LocalStrategy({usernameField: 'email', passwordField: 'password' }, (email, password, done ) => {
			User.findOne({ email: email})
				.then(user => {
					if(!user) {
						return done(null, false, { message: '*Incorrect email'})
					}
					// Check if inputted password matches the encripted version
					bcrypt.compare(password, user.password, (err, isMatch) => {
						if(err) throw err;
						if(isMatch) {
							return done(null, user);
						} else {
							return done(null, false, {message: '*Incorrect password'})
						}
					});
				})
				.catch(err => console.log(err));
		}) 
	);
	passport.serializeUser((user, done) => {
  		done(null, user._id);
	});

	passport.deserializeUser((id, done) => {
	  User.findById(id, function(err, user) {
    	done(err, user);
  		});
	});
}