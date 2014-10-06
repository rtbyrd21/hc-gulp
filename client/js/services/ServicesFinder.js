
app.factory("HC", ["$resource", function($resource) {
    return {
        API: $resource('/api/hc/:id')
    }
}]);