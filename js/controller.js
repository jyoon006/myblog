var myApp = angular.module('myBlog', []);

myApp.controller('myEntries', function($scope, $http) {
	$scope.blogs = [];
	
	$http.get('js/data.json').success(function(data) {
		$scope.blogs = data;
	});
});
