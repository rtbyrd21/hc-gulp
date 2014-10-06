
app.factory("OVER", function($resource) {
 return {
        API: $resource('/api/over/:id')
    }
});
