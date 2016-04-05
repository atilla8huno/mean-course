(function () {
    'use strict';
    
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var todoSchema = new Schema({
        usuario: String,
        todo: String,
        finalizado: Boolean
    });

    var Todo = mongoose.model('Todo', todoSchema);

    module.exports = Todo;
})();
