module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests

//app.get('/api/users', function(req, res, next){
//  if(!req.isAuthenticated()) {
//      res.status(403);
//      res.end();
//    }else{
//      next();
//    } 
//},function(req, res) {
//		User.find({}).exec(function(err, collection){
//          res.send(collection);
//        })
//	});  
  
//app.get('/login', function(req, res) {
//		res.sendfile('./client/index_admin.html');
//	});	
//  
//app.get('/admin', function(req, res) {
//		res.sendfile('./client/index_admin.html');
//	});
//app.get('/services', function(req, res) {
//		res.sendfile('./client/index.html');
//	});	
//app.get('/login', function(req, res) {
//		res.render('index.ejs',{
//          bootstrappedUser: req.user
//        
//        });
//});
//    app.get('/admin', function(req, res) {
//		res.render('index.ejs',{
//          bootstrappedUser: req.user
//        
//        });
//});
//
//app.use(function(req, res, next){
//  console.log(req.user);
//  next();
//});  
  
//app.get('/', function(req, res) {
//		res.sendfile('./client/index.html');
//	});
  
//  app.get('/', function(req, res) {
//		res.render('index',{
//          bootstrappedUser: req.user
//        
//        });
//	});
    
};