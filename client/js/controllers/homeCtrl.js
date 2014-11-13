

app.controller('homeController', function ($scope, HC, CAL, $resource, $http, $sce, $routeParams, mvIdentity, myNotifier, mvAuth, $location) { 
  
   $scope.services = [];
  
  HC.API.query(function(results) {
        $scope.services = results;
    });

$scope.json={};
$scope.json.shortname=$routeParams.id;  
  
$scope.month={};
$scope.month=$routeParams.id; 
  
$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 }; 
  
 $scope.createService = function() {
      var service = new HC.API();
      service.title = $scope.serviceTitle;
      service.shortname = $scope.serviceShortname;
      service.summary = $scope.serviceSummary;
      service.description = $scope.serviceDescription;
      service.category = $scope.serviceCategory;
      service.$save(function(result){
        $scope.services.push(result);
        $scope.serviceTitle = '';
        $scope.serviceShortname = '';
        $scope.serviceSummary = '';
        $scope.serviceDescription = '';
        $scope.serviceCategory = '';
      });
    }
 
  
  
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
  

  
  
  $scope.calendar = [];
  
  CAL.API.query(function(results) {
        $scope.calendar = results;
    });  
  
  
  
 $scope.$on('$viewContentLoaded', function () {
var $window = $(window);
  



   

  
   
var str=location.href.toLowerCase();
$(".navlinks li a").each(function() {
if (str.indexOf((this).href.toLowerCase()) > -1) {
$("li.active").removeClass("active");
$(this).parent().addClass("active");
  
}
 });
   
console.log('str');
$('li.active:nth-of-type(1)').css({borderBottomColor: "#28b3c9"});
$('.services.active:nth-of-type(2)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(3)').css({borderBottomColor: "#6bdb94"});
$('li.active:nth-of-type(4)').css({borderBottomColor: "#e25135"});  
$('li.active:nth-of-type(5)').css({borderBottomColor: "#28b3c9"});
$('li.active:nth-of-type(6)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(7)').css({borderBottomColor: "#e25135"});  
 


 
   
   
 });//jqueryfix
    
  
  
  
});


