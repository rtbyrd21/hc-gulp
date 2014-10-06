var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var ContactSchema   = new Schema({
	title: String,
    shortname: String,
    contents: String
});



module.exports = mongoose.model('ContactData',  ContactSchema);