app.controller('PopupController', ['$scope', '$rootScope', function($scope, $rootScope) {
 
	$scope.hide=function(){
		$scope.$parent.showGlass=false;
	};
	
}]);
