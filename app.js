var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var config = require('./config');
var todoCtrl = require('./controller/todoCtrl');

// setup express
var app = express();
app.use('/assets', express.static(__dirname + '/public'));

// setup mongodb
var port = process.env.PORT || 3000;
mongoose.connect(config().getConnectionString());

// setup body-parser
// Configura os HTTPMessageConverters para consumir e produzir JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setup dos EndPoints
todoCtrl(app);

app.listen(port);
