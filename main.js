var app = angular.module('gitApp', []);
app.controller('gitCtrl', function todoCtrl($scope, $http) {
	$scope.title= 'User Search on github!!'

	$scope.userid = false;
	$scope.showhome=true;
	$scope.onUserComplete = function(request){
		$scope.user = request.data;
		$http.get($scope.user.repos_url)
			.then($scope.onRepos , $scope.onError)

		$http.get($scope.user.followers_url)
			.then($scope.onFollow, $scope.onError)

		// $http.get($scope.user.following_url)
		// 	.then($scope.onFollowing, $scope.onError)
	}
	$scope.onFollow = function(request){
		$scope.userid = true;
		$scope.showhome = false;
		$scope.followers = request.data;
		console.log(request.data)
	}

	// $scope.onFollowing = function(request){
	// 	$scope.following = request.data;
	// 	console.log($scope.following)
	// }

	$scope.onRepos = function(request){
		$scope.repos = request.data;
		//console.log($scope.repos)
	}
	$scope.onError = function(response){
		$scope.error = "User not found!!";
	}
	$scope.search = function(username){
		$http.get("https://api.github.com/users/" + username)
			.then($scope.onUserComplete , $scope.onError)
		$scope.username = "";
	}

})