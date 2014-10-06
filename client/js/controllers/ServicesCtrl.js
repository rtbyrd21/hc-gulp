

app.controller('servicesController', function ($scope, HC, CAL, OVER, VOL, GIVE, ABOUT, CONTACT, $resource, $http, $sce, $routeParams, mvIdentity, myNotifier, mvAuth, $location) { 

$scope.list = 0;
  
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
  

$scope.orderByAttribute = '';
  

 
$scope.obj =[ [{"day":"10","title":"day","summary":"summary","description":"ok","_id":"53f25185bffedb83d8348b22"}],
[{"day":"3","title":"day","summary":"summary","description":"ok","_id":"53f25185bffedb83d8348b22"}]];
  
  
  
CAL.API.query(function(results) {
        $scope.calendar = results;
      var temp = [];
      var result = temp.concat.apply(temp,results.map(function(itm){ 
      return temp.concat.apply(temp, Object.keys(itm.year).map(function(key){ 
       return itm.year[key]; 
  }));
}));  
  $scope.super = result;

    });  

 
  
  
  

  
OVER.API.query(function(results) {
        $scope.overview = results;
    }); 
  
  $scope.createOverview = function() {
      var overview = new OVER.API();
      overview.contents = $scope.overContents;
      overview.page = $scope.overPage;
      overview.$save(function(result){
        myNotifier.notify('New overview page created!');
        $scope.overview.push(result);
        $scope.overPage = '';
        $scope.overContents = '';
      });
    }  
  
$scope.editOverview = function(id, ok, yes) {
		$http.put('/api/over/' + id, 
                  {contents: ok,
                   page:yes
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Overview Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
$scope.createEvent = function() {
      var cal = new CAL.API();
  
  var month = [{day:$scope.calDay, title: $scope.calTitle, summary: $scope.calSummary, description: 'ok', month: $scope.calMonth}];
      cal.year = {};
      cal.year[$scope.calMonth] = month;
      myNotifier.notify('Calendar event created!');
      cal.$save(function(result){
        $scope.calendar.push(result);
        $scope.calDay = '';
        $scope.calTitle = '';
        $scope.calSummary = '';
      });
    }; 

$scope.removeEvent = function(id) {
		$http.delete('/api/cal/' + id)
			.success(function(data) {
				CAL.API.query(function(results) {
        $scope.calendar = results;
        myNotifier.notify('Calendar event deleted!');
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};  
  
  VOL.API.query(function(results) {
        $scope.volunteer = results;
    });

    $scope.createVolunteer = function() {
      var volunteer = new VOL.API();
      volunteer.title = $scope.volunteerTitle;
      volunteer.shortname = $scope.volunteerShortname;
      volunteer.contents = $scope.volunteerContents;
      volunteer.$save(function(result){
        myNotifier.notify('New volunteer page created!');
        $scope.volunteer.push(result);
        $scope.volunteerTitle = '';
        $scope.volunteerShortname = '';
        $scope.volunteerContents = '';
      });
    }
  
  $scope.editVolunteer = function(id, first, second, third) {
		$http.put('/api/vol/' + id, 
                  {title: second,
                   contents: third,
                   shortname: first
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Volunteer Page Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.removeVolunteer = function(id) {
		$http.delete('/api/vol/' + id)
			.success(function(data) {
				VOL.API.query(function(results) {
        $scope.volunteer = results;
        myNotifier.notify('Volunteer page deleted!');
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  


GIVE.API.query(function(results) {
        $scope.give = results;
    });

    $scope.createGive = function() {
      var give = new GIVE.API();
      give.title = $scope.giveTitle;
      give.shortname = $scope.giveShortname;
      give.contents = $scope.giveContents;
      give.$save(function(result){
        myNotifier.notify('New give page created!');
        $scope.give.push(result);
        $scope.giveTitle = '';
        $scope.giveShortname = '';
        $scope.giveContents = '';
      });
    }
  
  $scope.editGive = function(id, first, second, third) {
		$http.put('/api/give/' + id, 
                  {title: second,
                   contents: third,
                   shortname: first
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Give Page Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.removeGive = function(id) {
		$http.delete('/api/give/' + id)
			.success(function(data) {
				GIVE.API.query(function(results) {
        $scope.give = results;
        myNotifier.notify('Give page deleted!');
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
    
  
  ABOUT.API.query(function(results) {
        $scope.about = results;
    });

    $scope.createAbout = function() {
      var about = new ABOUT.API();
      about.title = $scope.aboutTitle;
      about.shortname = $scope.aboutShortname;
      about.contents = $scope.aboutContents;
      about.$save(function(result){
        myNotifier.notify('New about page created!');
        $scope.about.push(result);
        $scope.aboutTitle = '';
        $scope.aboutShortname = '';
        $scope.aboutContents = '';
      });
    }
  
  $scope.editAbout = function(id, first, second, third) {
		$http.put('/api/about/' + id, 
                  {title: second,
                   contents: third,
                   shortname: first
                  }
                  )
           .success(function(data) {
			myNotifier.notify('About Page Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.removeAbout = function(id) {
		$http.delete('/api/about/' + id)
			.success(function(data) {
				ABOUT.API.query(function(results) {
        $scope.about = results;
        myNotifier.notify('About page deleted!');
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
CONTACT.API.query(function(results) {
        $scope.contact = results;
    });

    $scope.createContact = function() {
      var contact = new CONTACT.API();
      contact.title = $scope.contactTitle;
      contact.shortname = $scope.contactShortname;
      contact.contents = $scope.contactContents;
      contact.$save(function(result){
        myNotifier.notify('New Contact page created!');
        $scope.contact.push(result);
        $scope.contactTitle = '';
        $scope.contactShortname = '';
        $scope.contactContents = '';
      });
    }
  
  $scope.editContact = function(id, first, second, third) {
		$http.put('/api/contact/' + id, 
                  {title: second,
                   contents: third,
                   shortname: first
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Contact Page Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.removeContact = function(id) {
		$http.delete('/api/contact/' + id)
			.success(function(data) {
				CONTACT.API.query(function(results) {
        $scope.contact = results;
        myNotifier.notify('Contact page deleted!');
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.$on('$viewContentLoaded', function () 
 {

var str=location.href.toLowerCase();
$(".nav li a").each(function() {
if (str.indexOf(this.href.toLowerCase()) > -1) {
 $("li.active").removeClass("active");
$(this).parent().addClass("active");
}
 });
//console.log(str);
$('li.active:nth-of-type(1)').css({borderBottomColor: "#28b3c9"});
$('li.active:nth-of-type(2)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(3)').css({borderBottomColor: "#6bdb94"});
$('li.active:nth-of-type(4)').css({borderBottomColor: "#e25135"});  
$('li.active:nth-of-type(5)').css({borderBottomColor: "#28b3c9"});
$('li.active:nth-of-type(6)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(7)').css({borderBottomColor: "#6bdb94"}); 

 
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
 google.maps.event.addDomListener(window, 'click', initialize);  
   
   
   
   

 });//jqueryfix
    
  

  
  
  
});


