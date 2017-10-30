'use strict';

var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express');
var path = require('path');

var prices = require('./controllers/prices')();

var app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

cors({
  credentials: true,
  origin: true
});
app.use(cors()); // Support cross orgin requests

// Map routes to controller functions
app.get('/prices', prices.list);

// Export app object
module.exports = app;
