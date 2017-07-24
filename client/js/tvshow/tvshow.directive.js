angular.module('tvshow.directive', ["ngSanitize"])
	.directive("tvDirective", function(){
	    return {
	        restrict: "EA",
	        scope: false,
	        templateUrl: '../views/show.preview.html'
	    };
    });

//This directive is added o handle default image whenever image url is there but it is not found on server and request turns into 404 error.

angular.module('tvshow.directive')
	.directive('imageDirective', function() {
	  return {
	    link: function(scope, element, attrs) {
	      var defaultSrc = attrs.src;
	      element.bind('error', function() {
	        if(attrs.imageDirective) {
	            element.attr('src', attrs.imageDirective);
	        }
	        else if(attrs.src) {
	            element.attr('src', defaultSrc);
	        }
	      });
	    }
	  }
	});