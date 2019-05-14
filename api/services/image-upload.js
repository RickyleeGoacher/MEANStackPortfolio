const express = require('express');
const router = express.Router();
const jwt = require('jsonWebtoken');
const { ensureAutenticated } = require('../config/auth');
const path = require('path');
const fs = require('fs');

router.route('/file').post(ensureAutenticated, (req, res, next) => {
    jwt.verify(req.token, process.env.SECRET, (err) => {
        let fileData = req.body;
        if(fileData) {
            if(!fs.existsSync('images')) {
               fs.mkdirSync('images');
            }
            fileData.ImageSrc = fileData.ImageSrc.replace("data:image/jpeg;base64,", "");
            fileData.ImageSrc = fileData.ImageSrc.replace("data:image/png;base64,", "");
            fileData.ImageSrc = fileData.ImageSrc.replace("data:image/jpg;base64,", "");
            fileData.ImageSrc = fileData.ImageSrc.replace("data:image/gif;base64,", "");
            fs.writeFile("../dist/angularGamePortfolio/assets/images/" + fileData.ImageName, fileData.ImageSrc, 'base64', (err) => {
                if(err) {
                    console.log(err);
                } else {
                    res.send({message: 'Successfully uploaded image'})
                }
            })
        }
    });    
});

module.exports = router;