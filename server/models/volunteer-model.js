var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var VolunteerSchema   = new Schema({
	title: String,
    shortname: String,
    contents: String
});



module.exports = mongoose.model('VolunteerData',  VolunteerSchema);