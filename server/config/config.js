var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development:{
    db: 'mongodb://localhost:27017/mean-demo',
    rootPath: rootPath,
    port: process.env.PORT || 8080
  },
  production:{
    db: 'mongodb://rtbyrd21:Kennedy123@novus.modulusmongo.net:27017/inyX5iwi',
    rootPath: rootPath,
    port: process.env.PORT || 80

  }


}