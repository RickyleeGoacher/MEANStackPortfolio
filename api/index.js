const express = require('express');
const app = express();
const ProjectRoute = require('./routes/projects');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const http = require('http');
const path = require('path');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/projects', ProjectRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));