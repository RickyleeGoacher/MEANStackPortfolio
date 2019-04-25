const Projects = require('../models/projects');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');

// Get all projects

router.get('/', (req, res, next) => {
	Projects.find((err, data) => {
		res.json(data);
	});
});

// Get single project by url

router.route('/update/:id').get((req, res) => {
    Projects.findById(req.params.id, (err, project) => {
        if (err)
            console.log(err);
        else
            res.json(project);
    });
});

// Post a project to the database

router.route('/create').post( (req, res) => {
  let post = new Projects(req.body);
  post.save()
    .then(post => {
      res.status(200).json({'Project': 'Project added'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Update post by id

router.route('/update/:id').post((req, res) => {
    Projects.findById(req.params.id, (err, project) => {
        if (!project)
            return next(new Error('Could not load document'));
        else {
            project.title = req.body.title;
            project.description = req.body.description;
            project.image = req.body.image;
            project.content = req.body.content;

            project.save().then(project => {
                res.json('Update done');
            }).catch(err => {
                res.status(400).send('Update failed');
            });
        }
    });
});

// Delete post by id

router.get('/delete/:id', (req, res, next) => {
	Projects.findByIdAndRemove(req.params.id, (err, data) => {
		if(!err) {
			res.json('Sucessfully deleted');
		} else {
			console.log('error');
		}
	})
})


module.exports = router;