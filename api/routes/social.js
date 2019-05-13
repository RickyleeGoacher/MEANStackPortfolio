const Social = require('../models/social');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const jwt = require('jsonWebtoken');
const { ensureAutenticated } = require('../config/auth');

// Get social

router.get('/', (req, res, next) => {
	Social.find((err, data) => {
		res.json(data);
	});
});

// Create social

router.route('/create').post(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            let post = new Social(req.body);
                post.save()
                    .then(post => {
                        res.status(200).json({'Socal': 'Social added'});
                    })
                    .catch(err => {
                        res.status(400).send("unable to save to database");
                    });
        }
    });
});

// Get social

router.route('/update/:id').get(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Social.findById(req.params.id, (err, social) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(social);
                }
            });
        }
    });
});

// Update social

router.route('/update/:id').post(ensureAutenticated, (req, res, next) => {
        jwt.verify(req.token, process.env.SECRET, (err) => {
        if(err) {
          res.sendStatus(403);
        } else {
            Social.findById(req.params.id, (err, data) => {
                if (!data)
                    return next(new Error('Could not load document'));
                else {
                    data.icon = req.body.icon;
                    data.link = req.body.link;

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