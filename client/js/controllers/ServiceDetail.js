
app.controller('servicesDetail', function ($scope, HC, $resource, $routeParams, $sce) { 


HC.API.query(function (results) {
    $scope.services = results;
});


$scope.json={};
$scope.json.shortname=$routeParams.id;
  


});

