

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


$(".address").css({display: "none"});
$(".location").css({display: "none"});
$(".thirdrow .promoitem:first-of-type").css({display: "none"});
//$("<div class=\"promoitem\"><h4>Partners</h4><p>If you need help with your job search, with skills to retain or adjust to your current job, or with finding fulfillment in your work, we\'re here to help.</p><br><a>Learn more</a></div>" ).appendTo( ".secondrow .hcpromo" );
$("<div class=\"promoitem\"><h4>Location</h4><p>The Healing Center is located in Tri-County on Kemper Road, across from Target.<br><br>Click for map and directions.</p></div>" ).appendTo( ".thirdrow .hcpromo" );
$("<div class=\"address\"><h4>Contact Information</h4><p>Healing Center Cincinnati<br>11345 Century Circle W.<br>Springdale, OH 45246<br>(513)346-4080</p><h4>Office Hours</h4><p>Tuesday - Friday, 8:30am - 5:00pm</p><h4>Service Hours</h4><p>Wednesday - Sat 9:00am - 12noon<br>Thursday evenings, 6:30-9pm</p></div>" ).appendTo( ".appendable" );
$(".secondrow .promoitem:last-of-type").css({marginRight: "0px"});

   
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
$(".nav li a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
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

$(document).ready(function(){
    var i = 0;    
    var stuff =["/images/misc/good_exteriorbrightfixed.jpg","/images/artwork/welcome-area.png"]; 
    var imagecount = stuff.length;
    $(".next").click(function(){
         i = (imagecount + i - 1) % imagecount;
        var change = (stuff[i]);
        $('.hero').css({background: "url" + "(" + change + ")"});
        $('.hero').css({backgroundSize: "cover"});
    });
    $(".prev").click(function(){
        i = (imagecount + i - 1) % imagecount;
        var change = (stuff[i]);
        $('.hero').css({background: "url" + "(" + change + ")"});
        $('.hero').css({backgroundSize: "cover"});
    });
});

//HERO////////////   
   
   
 function initialize() {
        var myLatlng = new google.maps.LatLng(39.281203, -84.455547);
        var mapOptions = {
          center: new google.maps.LatLng(39.281203, -84.455547),
          zoom: 15,
          draggable: true
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
      
      }
$(document).ready(function(){   
 google.maps.event.addDomListener(window, 'click', initialize);
  
  
  
});     
     

  
  
 
   
   
 });//jqueryfix
    
  
  
  
});


