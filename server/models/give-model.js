var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var GiveSchema   = new Schema({
	title: String,
    shortname: String,
    contents: String,
    image: String,
    category: String
});



module.exports = mongoose.model('GiveData',  GiveSchema);