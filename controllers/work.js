mySite.controller('WorkCtrl', function($scope, $routeParams, $location) {
  $scope.page = $location.$$path

	$scope.project = $routeParams.project;
  $scope.starWars = false;
  $scope.star = () => {
    $scope.starWars = !$scope.starWars;
  }

})
