angular.module('app', 
	['ngRoute', 'ngResource', 'tvshow.controller', 'tvshow.service', 'tvshow.directive', 'show.controller', 'show.service'])
	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/tvshow.html',
					controller: 'TvShowController'
				})
				.when('/show/:id', {
          			templateUrl: 'views/show.html',
          			controller:'ShowController',
         			resolve: {
            			show: function($route, ShowService){
              				return ShowService.get({ id: $route.current.params.id})
            			}
          			}
        		})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);