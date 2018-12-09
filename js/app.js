angular.module('Zoho', ['ui.router','Zoho.controllers','Zoho.services','Zoho.directive'])
.config(function($stateProvider, $urlRouterProvider){
	   $urlRouterProvider.otherwise('login');	
	
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl : 'pages/login.html',
			controller : 'loginController'
		})
		.state('homepage',{
			url: '/home',
			templateUrl : 'pages/home.html',
		})
		.state('profile',{
			url: '/my-profile',
			templateUrl : 'pages/profile.html',
			controller : 'profileController'
		})
});