app.controller('ProjectController', ['$scope', 'Network', '$location',
	function($scope, $network, $location) {
    
    	$scope.project = {};

	    $scope.createProject = function() {    	
    		$network.createProject($scope.project);
    		$location.path("/index.html");
    	}

    	 $scope.cancelCreateProject = function() {    	
    		$location.path("/");
    	}
	         

}]);
