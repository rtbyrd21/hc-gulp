var Hc = require('../models/healingcenter-model.js')
var passport = require('passport');
//module.exports.create = function (req, res) {
//  var hc = new Hc(req.body);
//  hc.save(function (err, result){
//    res.json(result);
//  });
//}



module.exports.list = function (req,res) {
  Hc.find({}, function (err, results){
    res.json(results);
  });
}


module.exports.create = function (req, res) {
  var hc = new Hc(req.body); 		// create a new instance of the Bear model
//		hc.name = req.body.title;  // set the bears name (comes from the request)

		// save the bear and check for errors
		hc.save(function(err, result) {
			if (err)
				res.send(err);

			res.json(result);
		});
}


module.exports.remove = (function(req, res) {
		Hc.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json(service);
		});
	});

module.exports.authenticate = function(req,res,next){
    var auth = passport.authenticate('local', function(err, user){
      if(err) {return next(err);}
      if (!user) {res.send({success:false})}
      req.logIn(user, function(err){
        if(err) {return next(err);}
        res.send({success:true, user:user});
      })
    })
    auth(req, res, next);
  }

