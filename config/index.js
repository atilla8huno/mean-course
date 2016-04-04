var configValues = require('./config');

var connection = {
    getConnectionString: function getConnectionString(arams) {
        return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds015750.mlab.com:15750/todo-mean-course';
    }
};

module.exports = connection;
