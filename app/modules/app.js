"use strict";
angular.module('landing', []);
angular.module('myapp', [
	'ui.router',
	'landing'
	])

.controller('rootCtrl', function($scope, $rootScope){
	var rc = this;
	$rootScope.title = 'root scope';

})

.config( function($stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);

	$stateProvider
	
	.state('index', {
		url   : '/',
		views :  {
			sectionView: {
				controller: 'landingCtrl',
				template : '<h2>Landing section</h2>'
			}
		}
	}) 
})
