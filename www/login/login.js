(function() {
	'use strict';

	angular.module('infoApp.login', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/login', {
	    templateUrl: 'login/login.html',
	    controller: 'LoginController'
	  });
	}])

	.controller('LoginController', [function() {
		$('body').addClass('background-apostle');
		$('#header').addClass('hidden');
	}]);
})();