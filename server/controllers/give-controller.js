var Give = require('../models/give-model.js')


module.exports.list = function (req,res) {
  Give.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var giv = new Give(req.body); 		
		giv.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}
