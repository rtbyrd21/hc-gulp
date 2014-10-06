var Contact = require('../models/contact-model.js')


module.exports.list = function (req,res) {
  Contact.find({}, function (err, results){
    res.json(results);
  });
}

module.exports.create = function (req, res) {
  var cont = new Contact(req.body); 		
		cont.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}