(function() {
	'use strict';

	angular.module('infoApp.register', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/register', {
			templateUrl: 'register/register.html',
			controller: 'RegisterController'
		});
	}])

	.controller('RegisterController', [function() {
		$('body').addClass('background-apostle');
		$('#header').addClass('hidden');
	}]);
})();