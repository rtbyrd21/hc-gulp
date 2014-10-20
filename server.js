// modules =================================================
var express         = require('express'),
    logger          = require('morgan'),
    bodyParser      = require('body-parser'),
    cookieParser    = require('cookie-parser'),
    session         = require('express-session'),
    mongoose        = require('mongoose'),
    methodOverride  = require('method-override'),
    hcController    = require('./server/controllers/services-controller.js'),
    calController   = require('./server/controllers/calendar-controller.js'),
    overController  = require('./server/controllers/overview-controller.js'),
    volController   = require('./server/controllers/volunteer-controller.js'),
    giveController  = require('./server/controllers/give-controller.js'),
    aboutController = require('./server/controllers/about-controller.js'),
    contactController  = require('./server/controllers/contact-controller.js'),
    Service         = require('./server/models/healingcenter-model.js'),
    User            = require('./server/models/user-model.js'),
    Cal             = require('./server/models/calendar-model.js'),
    Over            = require('./server/models/overview-model.js'),
    Vol             = require('./server/models/volunteer-model.js'),
    Give            = require('./server/models/give-model.js'),
    About           = require('./server/models/about-model.js'),
    Contact         = require('./server/models/contact-model.js'),
    router          = express.Router(),
    passport        = require('passport');
var authenticate    = function(req, res, next) {
  if(!req.isAuthenticated()) {
      res.status(403);
      res.redirect('/login');
      res.end();
    } else {
      next();
    }
}

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app            = express();
// configuration ===========================================
	
// config files
//var db = require('./config/db');
//if(env === 'development'){
//mongoose.connect('mongodb://localhost:27017/mean-demo');
//}else{
mongoose.connect('mongodb://hccincinnati:letmein@ds041160.mongolab.com:41160/healingcenter');
//mongoose.connect('mongodb://rtbyrd21:letmein@novus.modulusmongo.net:27017/isI6give');
//}
var db = mongoose.connection;

db.on('error', function callback () {
  console.log("Connection error");
});

db.once('open', function callback () {
  console.log("Mongo working!");
});

var User = mongoose.model('User');


app.use(function(req, res, next) {
	// do logging
	console.log('I\'m working!!!!!!!!!!!!!!.');
	next(); // make sure we go to the next routes and don't stop here
});
app.use(cookieParser());
app.use(bodyParser());
//app.use(session({secret: 'healing center'}));
app.use(passport.initialize());
app.use(passport.session());


require('./server/config/passport.js')();



app.get('/', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'home'
        });
});

app.get('/services', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'services'
        });
});

app.get('/services/:id', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'services'
        });
});

app.get('/events', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});

app.get('/events/:id', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});
app.get('/volunteer', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});

app.get('/volunteer/:id', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});
app.get('/give', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});

app.get('/give/:id', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});
app.get('/about', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'about'
        });
});

app.get('/about/:id', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'about'
        });
});
app.get('/contact', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});

app.get('/contact/:id', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'events'
        });
});


app.use('/js', express.static(__dirname + '/client/js'));




app.post('/login', hcController.authenticate);

app.post('/logout', function(req, res){
  req.logout();
  res.end();
});

//REST API
router.get('/hc', hcController.list);
router.post('/hc', hcController.create);
router.get('/cal', calController.list);
router.post('/cal', calController.create);
router.get('/over', overController.list);
router.post('/over', overController.create);
router.get('/vol', volController.list);
router.post('/vol', volController.create);
router.get('/give', giveController.list);
router.post('/give', giveController.create);
router.get('/about', aboutController.list);
router.post('/about', aboutController.create);
router.get('/contact', contactController.list);
router.post('/contact', contactController.create);


router.route('/cal/:_id')
.get(function(req, res) {
		Cal.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		Cal.findById(req.params._id, function(err, calendar) {
			if (err)
				res.send(err);
			calendar.year = req.body; 	
			// save the items
			calendar.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Calendar updated!' });
			});
		});
	})
.delete(function(req, res) {
		Cal.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

router.route('/vol/:_id')

	// get the service with that id (accessed at GET http://localhost:8080/api/hc/:_id)
	.get(function(req, res) {
		Vol.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		Vol.findById(req.params._id, function(err, volunteer) {
			if (err)
				res.send(err);
			volunteer.title = req.body.title; 	// update the items info
            volunteer.shortname = req.body.shortname;
            volunteer.contents = req.body.contents;
			// save the items
			volunteer.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Volunteer content updated!' });
			});
		});
	})
.delete(function(req, res) {
		Vol.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

router.route('/give/:_id')

	// get the service with that id (accessed at GET http://localhost:8080/api/hc/:_id)
	.get(function(req, res) {
		Give.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		Give.findById(req.params._id, function(err, giv) {
			if (err)
				res.send(err);
			giv.title = req.body.title; 	// update the items info
            giv.shortname = req.body.shortname;
            giv.contents = req.body.contents;
			// save the items
			giv.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Give content updated!' });
			});
		});
	})
.delete(function(req, res) {
		Give.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
router.route('/contact/:_id')

	// get the service with that id (accessed at GET http://localhost:8080/api/hc/:_id)
	.get(function(req, res) {
		Contact.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		Contact.findById(req.params._id, function(err, cont) {
			if (err)
				res.send(err);
			cont.title = req.body.title; 	// update the items info
            cont.shortname = req.body.shortname;
            cont.contents = req.body.contents;
			// save the items
			cont.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Contact content updated!' });
			});
		});
	})
.delete(function(req, res) {
		Contact.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
router.route('/about/:_id')

	// get the service with that id (accessed at GET http://localhost:8080/api/hc/:_id)
	.get(function(req, res) {
		About.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		About.findById(req.params._id, function(err, abo) {
			if (err)
				res.send(err);
			abo.title = req.body.title; 	// update the items info
            abo.shortname = req.body.shortname;
            abo.contents = req.body.contents;
			// save the items
			abo.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'About content updated!' });
			});
		});
	})
.delete(function(req, res) {
		About.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

router.route('/over/:_id')

	// get the service with that id (accessed at GET http://localhost:8080/api/hc/:_id)
	.get(function(req, res) {
		Over.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		Over.findById(req.params._id, function(err, overview) {
			if (err)
				res.send(err);
			overview.contents = req.body.contents; 	// update the items info
            overview.page = req.body.page;
			// save the items
			overview.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Overview updated!' });
			});
		});
	})
.delete(function(req, res) {
		Over.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

router.route('/hc/:_id')

	// get the service with that id (accessed at GET http://localhost:8080/api/hc/:_id)
	.get(function(req, res) {
		Service.findById(req.params._id, function(err, result) {
			if (err)
				res.send(err);
			res.json(result);
		});
	})
.put(function(req, res) {
		Service.findById(req.params._id, function(err, service) {
			if (err)
				res.send(err);
			service.title = req.body.title; 	// update the items info
            service.summary = req.body.summary;
            service.shortname = req.body.shortname;
            service.description = req.body.description;
			// save the items
			service.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Service updated!' });
			});
		});
	})
.delete(function(req, res) {
		Service.remove({
			_id: req.params._id
		}, function(err, service) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});


app.get('/login', function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        });
});


app.get('/admin', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 

app.get('/admincal', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
app.get('/adminoverviews', authenticate,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
app.get('/adminoverviews/:id', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
 app.get('/adminvolunteer', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
app.get('/adminvolunteer/:id', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	});
 app.get('/admingive', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
app.get('/admingive/:id', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	});
 app.get('/adminabout', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
app.get('/adminabout/:id', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	});
 app.get('/admincontact', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	}); 
app.get('/admincontact/:id', authenticate ,function(req, res) {
		res.render('index.ejs',{
          bootstrappedUser: req.user,
          page: 'admin'
        
        })
	});
app.use('/api', router);

var port = process.env.PORT || 3000; // set our port
app.set('view engine', 'ejs');
app.set('views', 'server/views');
app.use(methodOverride('X-HTTP-Method-Override')); // simulate delete/put
app.use(express.static(__dirname + '/client')); // set the static files location /client/img will be /img for users

// routes ==================================================
//require('./server/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('listening on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app