const Home = require('../models/home');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const jwt = require('jsonwebtoken');
const { ensureAutenticated } = require('../config/auth');

// Get home

router.get('/', (req, res, next) => {
	Home.find((err, data) => {
		res.json(data);
	});
});

// Create Home content

router.route('/create').post(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            let post = new Home(req.body);    
                post.save()
                    .then(post => {
                        res.status(200).json({'Home': 'Text added'});
                    })
                    .catch(err => {
                        res.status(400).send("unable to save to database");
                    });
        }
    });
});

// Get home text

router.route('/update/:id').get(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Home.findById(req.params.id, (err, about) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(about);
                }
            });
        }
    });
});

// Update home text

router.route('/update/:id').post(ensureAutenticated, (req, res, next) => {
        jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Home.findById(req.params.id, (err, data) => {
                if (!data)
                    return next(new Error('Could not load document'));
                else {
                    data.title = req.body.title;
                    data.description = req.body.description;
                    data.image = req.body.image;

                    data.save().then(data => {
                        res.json('Update done');
                    }).catch(err => {
                        res.status(400).send('Update failed');
                    });
                }
            });
        }
    });
});

module.exports = router;