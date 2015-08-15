(function() {
	'use strict';

	// Declare app level module which depends on views, and components
	angular.module('infoApp', [
		'ngRoute',
		'infoApp.login',
		'infoApp.newsDetail',
		'infoApp.newsList',
		'infoApp.register',
		'infoApp.version'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/login'});
	}]);
})();