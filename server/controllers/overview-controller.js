var Over = require('../models/overview-model.js')


module.exports.list = function (req,res) {
  Over.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var over = new Over(req.body); 		
		over.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}