
app.factory("CAL", function($resource) {
 return {
        API: $resource('/api/cal/:id')
    }
});

