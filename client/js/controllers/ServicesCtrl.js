

app.controller('servicesController', function ($scope, HC, CAL, OVER, VOL, GIVE, ABOUT, CONTACT, BLOG, PARTNER, $resource, $http, $sce, $routeParams, mvIdentity, myNotifier, mvAuth, $location, $sce) { 

 $scope.signout = function() {
    mvAuth.logoutUser().then(function(){
      $scope.username = "";
      $scope.password = "";
      myNotifier.notify('You are now signed out');
      $location.path('/login');
    })  
  }    
  
$scope.list = 0;
  
   $scope.services = [];
  
  HC.API.query(function(results) {
        $scope.services = results;
    });

$scope.json={};
$scope.json.shortname=$routeParams.id;  
  
$scope.month={};
$scope.month=$routeParams.id; 
  
 $scope.isEmpty = function (obj) {
    for (var i in obj) if (obj.hasOwnProperty(i)) return false;
    return true;
}; 
  $scope.createService = function() {
      var service = new HC.API();
      service.title = $scope.serviceTitle;
      service.shortname = $scope.serviceShortname;
      service.summary = $scope.serviceSummary;
      service.description = $scope.serviceDescription;
      service.category = $scope.serviceCategory;
      myNotifier.notify('New service page created!');
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

 
app.directive('renderHtml', ['$compile', function ($compile) {
    return {
      restrict: 'E',
      scope: {
        html: '='
      },
      link: function postLink(scope, element, attrs) {

          function appendHtml() {
              if(scope.html) {
                  var newElement = angular.element(scope.html);
                  $compile(newElement)(scope);
                  element.append(newElement);
              }
          }

          scope.$watch(function() { return scope.html }, appendHtml);
      }
    };
  }]);  
  
  

  
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
  

  
BLOG.API.query(function(results) {
        $scope.blog = results;
    });

    $scope.createBlog = function() {
      var blog = new BLOG.API();
      blog.author = $scope.blogAuthor;
      blog.date = $scope.blogDate;
      blog.title = $scope.blogTitle;
      blog.shortname = $scope.blogShortname;
      blog.contents = $scope.blogContents;
      blog.category = $scope.blogCategory;
      blog.image = $scope.blogImage;
      blog.$save(function(result){
        myNotifier.notify('New blog entry created!');
        $scope.blog.push(result);
        $scope.blogAuthor = '';
        $scope.blogDate = '';
        $scope.blogTitle = '';
        $scope.blogShortname = '';
        $scope.blogContents = '';
        $scope.blogCategory = '';
        $scope.blogImage = '';
      });
    }
  
  $scope.editBlog = function(id, first, second, third, fourth, fifth, sixth, seventh) {
		$http.put('/api/blog/' + id, 
                  {
                    author: fifth,
                    date: sixth,
                    title: second,
                   contents: third,
                   shortname: first,
                   category: fourth,
                    image: seventh
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Blog Entry Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.removeBlog = function(id) {
		$http.delete('/api/blog/' + id)
			.success(function(data) {
				BLOG.API.query(function(results) {
        $scope.blog = results;
        myNotifier.notify('Blog entry deleted!');
    });
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  
  

PARTNER.API.query(function(results) {
        $scope.partner = results;
    });

    $scope.createPartner = function() {
      var part = new PARTNER.API();
      part.name = $scope.partnerName;
      part.contents = $scope.partnerContents;
      part.image = $scope.partnerImage;
      part.$save(function(result){
        myNotifier.notify('New partner created!');
        $scope.part.push(result);
        $scope.partnerName = '';
        $scope.partnerContents = '';
        $scope.partnerImage = '';
      });
    }
  
  $scope.editPartner = function(id, first, second, third) {
		$http.put('/api/blog/' + id, 
                  {
                    name: first,
                    contents: second,
                    image: third
                  }
                  )
           .success(function(data) {
			myNotifier.notify('Partner Entry Updated!');
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	}; 
  
  $scope.removePartner = function(id) {
		$http.delete('/api/partner/' + id)
			.success(function(data) {
				PARTNER.API.query(function(results) {
        $scope.partner = results;
        myNotifier.notify('Partner entry deleted!');
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
      give.image = $scope.giveImage;
      give.category = $scope.giveCategory;
      give.$save(function(result){
        myNotifier.notify('New give page created!');
        $scope.give.push(result);
        $scope.giveTitle = '';
        $scope.giveShortname = '';
        $scope.giveContents = '';
        $scope.giveImage = '';
        $scope.giveCategory = '';
      });
    }
  
  $scope.editGive = function(id, first, second, third, fourth, fifth) {
		$http.put('/api/give/' + id, 
                  {title: second,
                   contents: third,
                   shortname: first,
                   image: first,
                   category: first
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


var index = window.location.pathname.split('/')[1];
$('.navlinks li').removeClass('active');
$('li.' + index).addClass('active');
   
var index = window.location.pathname.split('/')[1];
$('.navlinks li').removeClass('active');
$('li.' + index).addClass('active');   
 

$('li.active:nth-of-type(1)').css({borderBottomColor: "#28b3c9"});
$('.services.active').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(3)').css({borderBottomColor: "#6bdb94"});
$('li.active:nth-of-type(4)').css({borderBottomColor: "#e25135"});  
$('li.active:nth-of-type(5)').css({borderBottomColor: "#28b3c9"});
$('li.active:nth-of-type(6)').css({borderBottomColor: "#ffd26b"});
$('li.active:nth-of-type(7)').css({borderBottomColor: "#e25135"});   
 console.log('callll'); 


		$('#calendar').fullCalendar({
		    height: 700,
          header: {
		left: 'title',
		center: 'prev,next',
		right: 'month,agendaWeek,agendaDay,today'
	},
           eventLimit: {
        'agenda': 4, // adjust to 6 only for agendaWeek/agendaDay
        'default': true // give the default value to other views
            },
			// US Holidays
//			events: 'https://www.google.com/calendar/feeds/vineyardcincinnati.com_o6jncckm5ka55fpragnbp4mk9c%40group.calendar.google.com/public/basic',
          eventSources: [
				{
                    
					url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic"
				},
			
				{
                    title: 'Event1',
					url: 'https://www.google.com/calendar/feeds/vineyardcincinnati.com_o6jncckm5ka55fpragnbp4mk9c%40group.calendar.google.com/public/basic'
				},
            {
            url: "https://www.google.com/calendar/feeds/ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com/public/basic"
				}
			],
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=700,height=600');
				return false;
			},
			
			loading: function(bool) {
				if (bool) {
					$('#loading').show();
				}else{
					$('#loading').hide();
				}
			}
			
		});
		

$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
  $('#calendar').fullCalendar( 'removeEventSource',  'https://www.google.com/calendar/feeds/vineyardcincinnati.com_o6jncckm5ka55fpragnbp4mk9c%40group.calendar.google.com/public/basic' );
});

   $( "#target2" ).click(function() {
  alert( "Handler for .click() called." );
  $('#calendar').fullCalendar( 'addEventSource',  'https://www.google.com/calendar/feeds/vineyardcincinnati.com_o6jncckm5ka55fpragnbp4mk9c%40group.calendar.google.com/public/basic' );
});
   
$(".checkbox0").change(function() {
    if(this.checked) {
      $('#calendar').fullCalendar( 'addEventSource',  'https://www.google.com/calendar/feeds/vineyardcincinnati.com_o6jncckm5ka55fpragnbp4mk9c%40group.calendar.google.com/public/basic' );
    }
    else{
    $('#calendar').fullCalendar( 'removeEventSource',  'https://www.google.com/calendar/feeds/vineyardcincinnati.com_o6jncckm5ka55fpragnbp4mk9c%40group.calendar.google.com/public/basic' );
    }
});
   
$(".checkbox1").change(function() {
    if(this.checked) {
      $('#calendar').fullCalendar( 'addEventSource',  "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic" );
    }
    else{
    $('#calendar').fullCalendar( 'removeEventSource',  "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic" );
    }
});
   
$(".checkbox2").change(function() {
    if(this.checked) {
      $('#calendar').fullCalendar( 'addEventSource',  'https://www.google.com/calendar/feeds/ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com/public/basic' );
    }
    else{
    $('#calendar').fullCalendar( 'removeEventSource',  'https://www.google.com/calendar/feeds/ht3jlfaac5lfd6263ulfh4tql8%40group.calendar.google.com/public/basic' );
    }
});   
   
 
   
   
//   $('#calendar').fullCalendar({
//		
//			// US Holidays
//			events: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
//			
//			eventClick: function(event) {
//				// opens events in a popup window
//				window.open(event.url, 'gcalevent', 'width=700,height=600');
//				return false;
//			},
//			
//			loading: function(bool) {
//				$('#loading').toggle(bool);
//			}
//			
//		});

 });//jqueryfix
    
  

  
  
  
});


