(function() {
	'use strict';

	angular.module('infoApp.splash', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/splash', {
			templateUrl: 'splash/splash.html',
			controller: 'SplashController'
		});
	}])

	.controller('SplashController', ['$timeout', function($timeout) {
		$('#header').addClass('hidden');

		var fadeSplash = function() {
			$('#splash-screen').fadeOut(2000, function() {
				window.location = '#/login';
			});
		};

		setTimeout(function() {
			$('#splash-screen').fadeOut(2000, function() {
				window.location = '#/login';
			});
		}, 2000);

		//$timeout(fadeSplash, 2000);
	}]);
})();