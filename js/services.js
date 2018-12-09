angular.module('Zoho.services', [])

//This JavaScript file "factory.js" for fetching the data from the database and provide it to the controller.
.factory('loginOperation', function($http,$q){
	var services={};
	services.getUserDetail = function(ldata){
	//console.log(ldata);
	var string = "ankan"+":"+"Mukhopadhyay";
	var encoding = btoa(string);
		return $http({
			method: 'GET',
			url: 'json/login.json',
            dataType: 'json',
            headers: {
            	'Authorization': 'Basic '+string
            },
		}) 
	}

	services.getProfile= function(){
			console.log("service called");

		return $http({
			method: 'GET',
			url: 'json/login.json',
            dataType: 'json'
		})
	}


	return services;
	
});