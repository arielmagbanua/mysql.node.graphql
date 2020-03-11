const express = require('express');
const bodyParser = require('body-parser');

// routes
const applicationRoutes = require('./routes/app');

const app = express();

// parse request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(applicationRoutes);

app.listen(8080);
