var configValues = require('./config');

module.exports = {
  getDbConnectionString: function() {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds117819.mlab.com:17819/mengledowl-node-todo';
  }
};