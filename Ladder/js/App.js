angular.module("Ladder",['Ladder.controllers','Ladder.services','Ladder.directives','ui.router'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('home',{
		url:'/home',
		templateUrl:'index.html',
		controller:'mainCtrl'
	})



	.state('home.addbook',{
		url:'/addbook',
		views:{
			'home-addbook':{
				templateUrl:'addbook.html',
				controller:'addbookCtrl'
			}
		}

	})
	$urlRouterProvider.otherwise('/home');
});