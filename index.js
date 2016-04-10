(function() {
    'use strict';
    
    // imports
    var express = require('express');
    var mongoose = require('mongoose');
    var bodyParser = require('body-parser');
    var config = require('./config'); // procura por index.js dentro de config
    var todoApi = require('./controller/todoApi'); // .js é opcional

    // setup express
    var app = express();
    
    // setup context-path da aplicação
    app.use('/', express.static(__dirname + '/public')); // poderia ser: app.use('/nomeDoMeuApp', express.static(__dirname + '/public'));  

    // setup body-parser
    // Configura os HTTPMessageConverters para consumir e produzir JSON
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // setup mongodb
    mongoose.connect(config.getConnectionString());

    // setup dos EndPoints
    todoApi(app);

    // setup server
    var port = process.env.PORT || 9000;       
    app.listen(port);
})();
