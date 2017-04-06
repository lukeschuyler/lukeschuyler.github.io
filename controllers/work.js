mySite.controller('WorkCtrl', function($scope, $routeParams, $location) {
  if($location.$$path === '/') {
    $scope.home = true;
      console.log($scope.home)
  } else {
    $scope.home = false;
      console.log($scope.home)
  }

	$scope.project = $routeParams.project;
  $scope.starWars = false;
  $scope.star = () => {
    $scope.starWars = !$scope.starWars;
  }

})
