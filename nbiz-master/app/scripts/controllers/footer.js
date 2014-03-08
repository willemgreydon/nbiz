function FooterCtrl($scope, $location, Global) {
	$scope.global = Global;
	$scope.menu = {};

	$scope.init = function() {
		console.log( "FooterCtrl > init" );
	
	};
}