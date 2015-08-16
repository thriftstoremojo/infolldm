(function() {
	'use strict';

	angular.module('infoApp.version.interpolate-filter', [])

	.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}]);
})();