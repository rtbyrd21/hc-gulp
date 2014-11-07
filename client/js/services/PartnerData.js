app.factory("PARTNER", function($resource) {
 return {
        API: $resource('/api/partner/:id')
    }
});