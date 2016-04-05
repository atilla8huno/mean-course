(function () {
    'use strict';
    
    var configValues = require('./config');
    
    var connection = {
        getConnectionString: function () {
            var url = 'mongodb://' + configValues.username + ':' + 
                configValues.password + '@ds015750.mlab.com:15750/todo-mean-course'; 
                
            console.log(url);
                
            return url;
        }
    };

    module.exports = connection;
})();
