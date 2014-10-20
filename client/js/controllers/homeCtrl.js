

app.controller('homeController', function ($scope, HC, CAL, $resource, $http, $sce, $routeParams, mvIdentity, myNotifier, mvAuth, $location) { 
  
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
      service.$save(function(result){
        $scope.services.push(result);
        $scope.serviceTitle = '';
        $scope.serviceShortname = '';
        $scope.serviceSummary = '';
        $scope.serviceDescription = '';
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
  
  
  
 $scope.$on('$viewContentLoaded', function () 
 {
var $window = $(window);
  
 function checkWidth() {
   var windowsize = $window.width();
   if (windowsize < 750) {
   $('.branding img').css({display: "none"});
$(".artist .toHide").hide();
$(".artist").click(function(){
    console.log('yes');
    $(".toHide",this).slideToggle(500);
    $("i",this).toggleClass("fa-chevron-circle-down fa-chevron-circle-up");
    

  });



   
  $(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});  

     
   }
   
}  

checkWidth();
$(window).resize(checkWidth);   
   
var str=location.href.toLowerCase();
$(".navlinks li a").each(function() {
if (str.indexOf((this).href.toLowerCase()) > -1) {
$("li.active").removeClass("active");
$(this).parent().addClass("active");
  
}
 });
console.log(str);
$('li.active:nth-of-type(1)').css({borderBottomColor: "#28b3c9"});
$('li.active:nth-of-type(2)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(3)').css({borderBottomColor: "#6bdb94"});
$('li.active:nth-of-type(4)').css({borderBottomColor: "#e25135"});  
$('li.active:nth-of-type(5)').css({borderBottomColor: "#28b3c9"});
$('li.active:nth-of-type(6)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(7)').css({borderBottomColor: "#e25135"});  
 

   
//HERO////////////



//HERO////////////   
   
   
// function initialize() {
//        var myLatlng = new google.maps.LatLng(39.281203, -84.455547);
//        var mapOptions = {
//          center: new google.maps.LatLng(39.281203, -84.455547),
//          zoom: 15,
//          draggable: true
//        };
//        var map = new google.maps.Map(document.getElementById("map-canvas"),
//            mapOptions);
//        var marker = new google.maps.Marker({
//      position: myLatlng,
//      map: map,
//      title: 'Hello World!'
//  });
//      
//      }
//$(document).ready(function(){   
// google.maps.event.addDomListener(window, 'click', initialize);
//  
//  
//  
//});     
     

  
  
 
   
   
 });//jqueryfix
    
  
  
  
});


