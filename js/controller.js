var myApp = angular.module('myBlog', [])
	.config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"]
    }]);


myApp.controller('myEntries', function($scope, $http) {
	$http.defaults.useXDomain = true;
	$scope.blogs = [];
	
	$http.get('js/data.json').success(function(data) {
		$scope.blogs = data;
	});
});
