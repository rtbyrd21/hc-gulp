
app.factory("VOL", function($resource) {
 return {
        API: $resource('/api/vol/:id')
    }
});
