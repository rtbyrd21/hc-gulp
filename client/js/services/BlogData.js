app.factory("BLOG", function($resource) {
 return {
        API: $resource('/api/blog/:id')
    }
});