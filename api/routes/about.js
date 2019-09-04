const About = require('../models/about');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const jwt = require('jsonwebtoken');
const { ensureAutenticated } = require('../config/auth');

// Get about

router.get('/', (req, res, next) => {
	About.find((err, data) => {
		res.json(data);
	});
});

// Create about

router.route('/create').post(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            let post = new About(req.body);
                post.save()
                    .then(post => {
                        res.status(200).json({'About': 'About added'});
                    })
                    .catch(err => {
                        res.status(400).send("unable to save to database");
                    });
        }
    });
});

// Get about

router.route('/update/:id').get(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            About.findById(req.params.id, (err, about) => {
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

// Update about

router.route('/update/:id').post(ensureAutenticated, (req, res, next) => {
        jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            About.findById(req.params.id, (err, data) => {
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