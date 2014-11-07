var mongoose  = require('mongoose');
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var PartnerSchema   = new Schema({
    name: String,
    contents: String,
    image: String
});



module.exports = mongoose.model('PartnerData',  PartnerSchema);