angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	$scope.getFriends = friendService.getFriends()
	.then(function(response){
		console.log(response.data);
		$scope.currentUser = response.data;
		$scope.friends = response.data.friends;
	});
	// FIX ME - assign values to $scope.currentUser and $scope.friends
});