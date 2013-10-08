app.controller('NewPollController', ['$scope', 'Network', '$location',
	function($scope, $network, $location) {
    
    	$scope.poll = {};

	    $scope.createPoll = function() {    	
    		$network.createPoll($scope.poll);
            $scope.$parent.showGlassNewPoll=false;
    	};

    	$scope.hide=function(){
			$scope.$parent.showGlassNewPoll=false;
		};
	         

}]);
