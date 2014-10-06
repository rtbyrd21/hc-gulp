
app.factory("CONTACT", function($resource) {
 return {
        API: $resource('/api/contact/:id')
    }
});