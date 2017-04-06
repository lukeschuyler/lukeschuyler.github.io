mySite.controller('WorkCtrl', function($scope, $routeParams) {
	$scope.project = $routeParams.project;
  console.log($scope.project)
})
