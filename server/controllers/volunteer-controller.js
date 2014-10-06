var Vol = require('../models/volunteer-model.js')


module.exports.list = function (req,res) {
  Vol.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var vol = new Vol(req.body); 		
		vol.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}
