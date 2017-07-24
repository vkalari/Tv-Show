angular.module('tvshow.service', [])
	.factory('tvshowResource', function ($resource) {

		//return $resource('/api/:type');


	    return $resource(
		    '/api/:type',
		    {},
		    {
		        'get': {
		            method: 'GET',
		            transformResponse: function (data) {return JSON.parse(data)},
		            isArray:true
		        }
		    }
	    );
	});