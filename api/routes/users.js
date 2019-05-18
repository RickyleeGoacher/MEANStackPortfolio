const Users = require('../models/users');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // Encription
const passport = require('passport');
const jwt = require('jsonWebtoken');
const { ensureAutenticated } = require('../config/auth');
const path = require('path');

// Register user

router.post('/register', (req, res, next) => {

	const { email, password, password2 } = req.body;

	let errors = [];

	if(!email || !password || !password2 ) {
		errors.push({ msg: 'Fill required fields' }); // Push error message to errors
	}

	// If the password length is less than 6 push an error

	if(password.length < 6) {
		errors.push({ msg: 'Password should be at least 6 characters'});
	}

	if(password != password2 ) {
		errors.push({ msg: 'Passwords do not match' }); // Push error message to errors
	}

	// If errors exsist reload register with user inputted data

	if(errors.length > 0){
		res.json({
			errors
		});
	}

	Users.findOne({ email: email })
		.then(user => {

			if (user) {

				errors.push({ msg: 'Email is already registered'}); // Push error

				res.json({
					errors
				});

			} else {

				const newUser = new Users({
					email,
					password
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if(err) {
							throw err;
						}

						newUser.password = hash;

						newUser.save()
						.then(user => {
							res.status(200).json({'User': 'User added'});
						})
						.catch(err => {
							return res.status(501).json(err);
						})
					});
				});
			}
	}).catch(err => {
            console.log('Registration error');
        });
});

// Login request - Check is login credentials are correct then redirect to dashboard else back to login

router.post('/login',function(req,res,next){

  passport.authenticate('local', {session: false}, (err, user, info) => {

    if (err) { return res.status(501).json(err); }
    if (!user) { return res.json(info); }

    req.logIn(user, (err) => {
      if (err) { return res.status(501).json(err); }
      
      if(!err) {
		jwt.sign({user}, process.env.SECRET, { expiresIn: '2m' }, (err, token) => {
           return res.status(200).json({token, user});
      });
      } 

    });

  })(req, res, next);
});

router.get('/logout', (req, res, next) => {
	req.logout();
	return res.status(200).json({message: 'Logout Success'});
});

module.exports = router;