app.controller('ProjectController', ['$scope', 'Network', '$location',
	function($scope, $network, $location) {
    
    	$scope.project = {};

	    $scope.createProject = function() {    	
    		$network.createProject($scope.project);
            $scope.$parent.showGlassNewProject=false;
    	};

    	$scope.hide=function(){
			$scope.$parent.showGlassNewProject=false;
		};
	         

}]);
