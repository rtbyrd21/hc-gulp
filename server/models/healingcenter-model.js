var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var BearSchema   = new Schema({
	title: String,
    shortname: String,
    summary: String,
    description: String,
    category: String
});



module.exports = mongoose.model('HealingCenterData',  BearSchema);


