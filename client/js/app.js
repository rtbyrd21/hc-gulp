var app = angular.module('hcApp', ['ngResource', 'filters', 'ngRoute', 'appRoutes', 'ui', 'ui.filters', 'xeditable', 'customFilters', 'theFilters', 'textAngular', 'ngSanitize']);

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

angular.module('hcApp')
 .filter('strip', function(){
      return function(text) {
           return text.replace(/'/g, '&#39;');
      };
});



angular.module('filters', []).
    filter('truncate', function () {
        return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

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

angular.module('textAngularTest', ['textAngular'])
    .config(['$provide', function($provide){
        // this demonstrates how to register a new tool and add it to the default toolbar
        $provide.decorator('taOptions', ['$delegate', function(taOptions){
            // $delegate is the taOptions we are decorating
            // here we override the default toolbars and classes specified in taOptions.
            taOptions.toolbar = [
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft','justifyCenter','justifyRight'],
                ['html', 'insertImage', 'insertLink', 'unlink']
            ];
            taOptions.classes = {
                focussed: 'focussed',
                toolbar: 'btn-toolbar',
                toolbarGroup: 'btn-group',
                toolbarButton: 'btn btn-default',
                toolbarButtonActive: 'active',
                disabled: 'disabled',
                textEditor: 'form-control',
                htmlEditor: 'form-control'
            };
            return taOptions; // whatever you return will be the taOptions
        }]);
        // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
        $provide.decorator('taTools', ['$delegate', function(taTools){
            taTools.bold.iconclass = 'icon-bold';
            taTools.italics.iconclass = 'icon-italic';
            taTools.underline.iconclass = 'icon-underline';
            taTools.ul.iconclass = 'icon-list-ul';
            taTools.ol.iconclass = 'icon-list-ol';
            taTools.undo.iconclass = 'icon-undo';
            taTools.redo.iconclass = 'icon-repeat';
            taTools.justifyLeft.iconclass = 'icon-align-left';
            taTools.justifyRight.iconclass = 'icon-align-right';
            taTools.justifyCenter.iconclass = 'icon-align-center';
            taTools.clear.iconclass = 'icon-ban-circle';
            taTools.insertLink.iconclass = 'icon-link';
            taTools.unlink.iconclass = 'icon-link red';
            taTools.insertImage.iconclass = 'icon-picture';
            // there is no quote icon in old font-awesome so we change to text as follows
            delete taTools.quote.iconclass;
            taTools.quote.buttontext = 'quote';
            return taTools;
        }]);
    }]);



