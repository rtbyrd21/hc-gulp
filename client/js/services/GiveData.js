app.factory("GIVE", function($resource) {
 return {
        API: $resource('/api/give/:id')
    }
});