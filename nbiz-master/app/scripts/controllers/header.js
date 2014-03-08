function HeaderCtrl($scope, $location, Global) {
	$scope.global = Global;
	$scope.navigation.main = [
		{
			"title": "Articles",
			"link": "articles"
		},
		{
			"title": "Create New Article",
			"link": "articles/create"
		}
	];

	$scope.navigation.login = [
		{
			"title": "Articles",
			"link": "articles"
		},
		{
			"title": "Create New Article",
			"link": "articles/create"
		}
	];

	$scope.init = function() {
		console.log( "HeaderCtrl > init" );
		console.log( $scope.navigation.main );
		console.log( $scope.navigation.login );
	
	};
}