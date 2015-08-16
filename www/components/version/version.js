(function() {
	'use strict';

	angular.module('infoApp.version', [
		'infoApp.version.interpolate-filter',
		'infoApp.version.version-directive'
	])

	.value('version', '0.1');
})();