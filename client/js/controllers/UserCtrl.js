

app.controller('userController', function ($scope, HC, $resource, $http, $sce, $routeParams, mvIdentity, myNotifier, mvAuth, $location) { 
  
   $scope.services = [];
  
  HC.API.query(function(results) {
        $scope.services = results;
    });

$scope.json={};
$scope.json.shortname=$routeParams.id;  
  
$scope.month={};
$scope.month=$routeParams.id; 
  
 
  
 $scope.createService = function() {
      var service = new HC.API();
      service.title = $scope.serviceTitle;
      service.shortname = $scope.serviceShortname;
      service.summary = $scope.serviceSummary;
      service.description = $scope.serviceDescription;
      service.category = $scope.serviceCategory;
      service.$save(function(result){
        myNotifier.notify('New service page created!');
        $scope.services.push(result);
        $scope.serviceTitle = '';
        $scope.serviceShortname = '';
        $scope.serviceSummary = '';
        $scope.serviceDescription = '';
        $scope.serviceCategory = '';
      });
    }
 

$scope.editService = function(id, ok, shortname, summary, descrip, category) {
		$http.put('/api/hc/' + id, 
                  {title: ok,
                   shortname: shortname,
                  summary: summary, 
                  description: descrip,
                   category: category
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Service Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 


  
$scope.removeItem = function(id) {
		$http.delete('/api/hc/' + id)
			.success(function(data) {
				HC.API.query(function(results) {
        $scope.services = results;
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};  
  

  $scope.identity = mvIdentity;
  $scope.signin = function(username, password){
    mvAuth.authenticateUser(username, password).then(function(success){
      if(success){
      myNotifier.notify('You have successfully signed in!');
      $location.path('/admin');
      } else{
      myNotifier.notify('Username/Password combination incorrect'); 
      }
    });
  
  }

  $scope.signout = function() {
    mvAuth.logoutUser().then(function(){
      $scope.username = "";
      $scope.password = "";
      myNotifier.notify('You are now signed out');
      $location.path('/login');
    })  
  }  
  



 
 
  
  
});


