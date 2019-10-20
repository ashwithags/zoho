angular.module('Zoho.controllers', [])

.controller('loginController', function($scope, $state, loginOperation) {
				console.log("login Controler");
	$scope.login = function(loginData) {
		//console.log(loginData);
        showDiv=true;
		loginOperation.getUserDetail(loginData).success(function(wow) {
			if (wow.success) {
				//console.log(wow.logins);
				//console.log(loginData.username);
				var userexist = false;
				for (var i = 0; i < wow.logins.length; i++) {
				//	console.log(wow.logins[i].username);
					if (loginData.username === wow.logins[i].username) {
						//alert("match");
						if (loginData.mobile == wow.logins[i].mobile) {
							//alert("match");
							sessionStorage.setItem("LogedInUser", JSON.stringify(loginData));
							$state.go('homepage');
							userexist = true;

						} else {
							alert("mobile not match");
							userexist = true;
						}
					}
				}
				if (userexist == false) {
					console.log("username does not exist");
				}
			}
		}, function(err) {
			console.log(err);
		});
	}

	$scope.signUp = function(signUpData) {
		console.log(signUpData);
		localStorage.setItem("signupDetail", JSON.stringify(signUpData));
		var d = JSON.parse(localStorage.getItem('signupDetail'));
		console.log(d);
		$state.go('homepage');
	}
})

.controller('profileController', function($scope, loginOperation){
		console.log("Profile Controler");
		console.log("called");
		loginOperation.getProfile().success(function(recData){
			console.log("received");
			if (recData.success) {
				console.log(recData.logins);
				var d = JSON.parse(sessionStorage.getItem('LogedInUser'));
				console.log(d);
				for(var i=0;i<recData.logins.length;i++){
					if(recData.logins[i].username == d.username){
						$scope.Profile = recData.logins[i];
						console.log(recData.logins[i]);
					}
				}
			}

		})

})

.controller('homeController',function($scope){
	$scope.table=[{name: "table 1"}];

	$scope.isDis= false;
	$scope.table.rows = [{}];
  $scope.row = {};
	$scope.addNewRow=function(table){
		$scope.isDis= false;

		table.rows.push({});
	}

	$scope.saveData=function(data){
		$scope.table.rows.push(data);
		$scope.table.rows.pop();
		console.log($scope.table.rows);
		$scope.isDis= true;
		console.log($scope.isDis);
	}
	
	console.log($scope.table);
})