var express        = require('express');
var logger         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');


module.exports = function(app, config) {

app.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile(config.rootPath + '/client/index.html');
});

app.use('/js', express.static(config.rootPath + '/client/js'));
  
app.set('view engine', 'html');
app.use(methodOverride('X-HTTP-Method-Override')); // simulate delete/put
app.use(express.static(config.rootPath + '/client')); // set the static files location /client/img will be /img for users  

}
