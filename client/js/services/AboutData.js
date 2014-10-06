app.factory("ABOUT", function($resource) {
 return {
        API: $resource('/api/about/:id')
    }
});