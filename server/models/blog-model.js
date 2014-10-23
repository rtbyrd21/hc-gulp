var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var BlogSchema   = new Schema({
    author: String,
    date: String,
	title: String,
    shortname: String,
    contents: String,
    category: String,
    disqus: String
});



module.exports = mongoose.model('BlogData',  BlogSchema);