const mySite = angular.module('mySite', ['ngRoute', '720kb.tooltips'])

mySite.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl : 'partials/home.html',
			controller : 'WorkCtrl'
		})
		.when('/work', {
			templateUrl : 'partials/work.html',
			controller : 'WorkCtrl'
		})
		.when('/contact', {
			templateUrl : 'partials/contact.html',
			controller : 'WorkCtrl'
		})
		.when('/work/:project', {
			templateUrl : 'partials/project.html',
			controller : 'WorkCtrl'
		})
		.otherwise( { redirectTo : '/' } )
})
