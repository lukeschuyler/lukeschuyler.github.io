mySite.controller('WorkCtrl', function($scope, $routeParams) {
	$scope.project = $routeParams.project;
  $scope.starWars = false;
  $scope.star = () => {
    $scope.starWars = !$scope.starWars;
  }
})
