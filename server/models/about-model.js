var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var AboutSchema   = new Schema({
	title: String,
    shortname: String,
    contents: String
});



module.exports = mongoose.model('AboutData',  AboutSchema);