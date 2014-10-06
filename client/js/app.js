var app = angular.module('hcApp', ['ngResource', 'ngRoute', 'appRoutes', 'ui', 'ui.filters', 'xeditable', 'customFilters', 'theFilters', 'textAngular']);

angular.module('hcApp')
    .filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

angular.module('hcApp')
.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

//angular.module('hcApp')
//.filter('combine', function() {
//  return function(items) {
//     return [].concat.apply([],items)
//          .sort(function(a,b){ return +a.day < b.day ? -1 : 1; });//and add sort as well probably
//  };
//});

angular.module('hcApp')
.filter('combine', function() {
  return function(items) {
     return [].concat.apply([],items);
     
  };

});


angular.module('hcApp')
.filter('escapeHTML', function(text) {
  if (text) {
    return text.
        replace(/&/g, '&amp;').
        replace(/</g, '&lt;').
        replace(/>/g, '&gt;').
        replace(/'/g, '&#39;').
        replace(/"/g, '&quot;');
  }
  return '';
});

//angular.module('hcApp')
//.filter('combine', function() {
//  return function(items) {
//    var temp = [];
//    var result = temp.concat.apply(temp,items.map(function(itm){ 
//      return temp.concat.apply(temp, Object(itm).map(function(key){ 
//       return itm.year[key]; 
//  }));
//}));  
//    return result;
//  };
//});

app.filter('orderByDayNumber', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (parseInt(a[field]) > parseInt(b[field]) ? 1 : -1);
        });
        return filtered;
    };
});

angular.module('customFilters', []).filter('filterKey', function() {
  function comparator(a, b) {
    return (''+a).toLowerCase().indexOf((''+b).toLowerCase()) > -1;
  }

  return function(obj, searchKey) {
    var filtered = {};
    angular.forEach(obj, function(value, key) {
      if (comparator(key, searchKey)) {
        filtered[key] = value;
      }
    });
    return filtered;
  };
});

angular.module('theFilters', []).filter('orderByDayNumber', function() {
  return function(items) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    return filtered;
  };
});