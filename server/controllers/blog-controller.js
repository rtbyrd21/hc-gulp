var Blog = require('../models/blog-model.js')


module.exports.list = function (req,res) {
  Blog.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var blo = new Blog(req.body); 		
		blo.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}