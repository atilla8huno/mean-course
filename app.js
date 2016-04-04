(function() {
    'use strict';
    
    // imports
    var express = require('express');
    var router = express.Router();
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser');
    var config = require('./config');
    var todoCtrl = require('./controller/todoCtrl');

    // setup express
    var app = express();
    // setup context-path da aplicação
    app.use('/todo-app', router);
    app.use('/assets', express.static(__dirname + '/public'));

    // setup body-parser
    // Configura os HTTPMessageConverters para consumir e produzir JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // setup mongodb
    mongoose.connect(config.getConnectionString());

    // setup dos EndPoints
    todoCtrl(router);

    // setup server
    var port = process.env.PORT || 3000;       
    app.listen(port);
})();
