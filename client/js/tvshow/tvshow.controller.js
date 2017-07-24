angular.module('tvshow.controller', [])
	.controller('TvShowController', function ($scope, tvshowResource) {

		$scope.getTvShow = function () {
			$scope.shows=[];
			//$scope.something=[];
			//alert("getTvShow: ");
			
			tvshowResource.get({
				type: 'shows',
				q: $scope.q
			}, function (response) {
				//alert(response[0].score);
				for(var i=0; i<response.length; i++)   {
					$scope.shows[i] = response[i].show;					
				}
				//$scope.something = $sce.trustAsHtml($scope.shows);				
			});	
		};

	});
