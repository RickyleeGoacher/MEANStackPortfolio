const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ProjectRoute = require('./routes/projects');
const UserRoute = require('./routes/users');
const HomeRoute = require('./routes/home');
const AboutRoute = require('./routes/about');
const SocialRoute = require('./routes/social');
const UploadRoute = require('./services/image-upload');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const http = require('http');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const fs = require('fs');

app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb', extended: true }));

app.use(cors({
  origin:['http://localhost:4200'],
  credentials:true,
}));



//app.use(express.static(path.join(__dirname, '../dist/angularGamePortfolio/')));


app.use('/images', express.static('images'))

const MongoStore = require('connect-mongo')(session);

app.use(session({
	secret: process.env.SECRET,
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/api/projects', ProjectRoute);
app.use('/api/users', UserRoute);
app.use('/api/home', HomeRoute);
app.use('/api/about', AboutRoute);
app.use('/api/upload', UploadRoute);
app.use('/api/social', SocialRoute);

//app.get("/*", function(req, res) {
//res.sendFile(path.join(__dirname, "../dist/angularGamePortfolio/"));
//});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

