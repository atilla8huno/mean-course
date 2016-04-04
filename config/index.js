var configValues = require('./config');

function connection() {
    function getConnectionString(arams) {
        return 'mongodb://' + configValues.username + ':' + configValues.password + '@ds015750.mlab.com:15750/todo-mean-course';
    }
    
    return {
        getConnectionString: getConnectionString
    };
};

module.exports = connection;
