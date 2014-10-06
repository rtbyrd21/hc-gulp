var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var GiveSchema   = new Schema({
	title: String,
    shortname: String,
    contents: String
});



module.exports = mongoose.model('GiveData',  GiveSchema);