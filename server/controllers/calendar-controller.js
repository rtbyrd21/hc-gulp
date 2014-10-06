var Cal = require('../models/calendar-model.js')


module.exports.list = function (req,res) {
  Cal.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var cal = new Cal(req.body); 		
		cal.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}
