angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'templates/home.html',
            controller:'homeController'
			
		})
      
		.when('/services', {
			templateUrl: 'templates/services.html',
			controller: 'servicesController'
		})
    
        .when('/services/:id', {
			templateUrl: 'templates/servicedetail.html',
			controller: 'servicesDetail'
		})
        
        .when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'userController'
		})
    
        .when('/admin', {
			templateUrl: 'templates/admin.html',
			controller: 'userController'
		})
    
        .when('/admin/:id', {
			templateUrl: 'templates/admindetail.html',
			controller: 'userController'
		})
        .when('/admincal', {
			templateUrl: 'templates/admincal.html',
			controller: 'servicesController'
		})
    
        .when('/admincal/:id', {
			templateUrl: 'templates/admincal.html',
			controller: 'servicesController'
		})
        .when('/adminoverviews', {
			templateUrl: 'templates/adminoverviews.html',
			controller: 'servicesController'
		})
        .when('/adminoverviews/:id', {
			templateUrl: 'templates/adminoverviewsdetail.html',
			controller: 'servicesController'
		})
        .when('/adminvolunteer', {
			templateUrl: 'templates/adminvolunteer.html',
			controller: 'servicesController'
		})
        .when('/adminvolunteer/:id', {
			templateUrl: 'templates/adminvolunteerdetail.html',
			controller: 'servicesController'
		})
        .when('/admingive', {
			templateUrl: 'templates/admingive.html',
			controller: 'servicesController'
		})
        .when('/admingive/:id', {
			templateUrl: 'templates/admingivedetail.html',
			controller: 'servicesController'
		})
        .when('/adminabout', {
			templateUrl: 'templates/adminabout.html',
			controller: 'servicesController'
		})
        .when('/adminabout/:id', {
			templateUrl: 'templates/adminaboutdetail.html',
			controller: 'servicesController'
		})
        .when('/admincontact', {
			templateUrl: 'templates/admincontact.html',
			controller: 'servicesController'
		})
        .when('/admincontact/:id', {
			templateUrl: 'templates/admincontactdetail.html',
			controller: 'servicesController'
		})
         .when('/events', {
			templateUrl: 'templates/events.html',
			controller: 'servicesController'
		})
    
        .when('/events/:id', {
			templateUrl: 'templates/eventsdetail.html',
			controller: 'servicesController'
		})
         .when('/volunteer', {
			templateUrl: 'templates/volunteer.html',
			controller: 'servicesController'
		})
    
        .when('/volunteer/:id', {
			templateUrl: 'templates/volunteerdetail.html',
			controller: 'servicesController'
		})
       .when('/give', {
			templateUrl: 'templates/give.html',
			controller: 'servicesController'
		})
    
        .when('/give/:id', {
			templateUrl: 'templates/givedetail.html',
			controller: 'servicesController'
		})
        .when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'servicesController'
		})
    
        .when('/about/:id', {
			templateUrl: 'templates/aboutdetail.html',
			controller: 'servicesController'
		})
        .when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'servicesController'
		})
    
        .when('/contact/:id', {
			templateUrl: 'templates/contactdetail.html',
			controller: 'servicesController'
		})

		.otherwise({redirectTo: '/'});
	$locationProvider.html5Mode(true);

}]);