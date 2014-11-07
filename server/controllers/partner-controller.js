var Partner = require('../models/partner-model.js')


module.exports.list = function (req,res) {
  Partner.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var par = new Partner(req.body); 		
		par.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}