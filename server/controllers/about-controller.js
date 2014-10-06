var About = require('../models/about-model.js')


module.exports.list = function (req,res) {
  About.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var abo = new About(req.body); 		
		abo.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}
