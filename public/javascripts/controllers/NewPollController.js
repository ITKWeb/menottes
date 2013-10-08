app.controller('NewPollController', ['$scope', 'Network', '$location',
	function($scope, $network, $location) {
    
    	$scope.poll = {};

	    $scope.createPoll = function() {    	
    		$network.createPoll($scope.poll);
    		console.log("date picker avec endDate " , $scope.poll);
            $scope.$parent.showGlassNewPoll=false;
    	};

    	$scope.startDateSelected = function(date) {
    		$scope.poll.startDate = date;
    	}

    	$scope.endDateSelected = function(date) {
    		$scope.poll.endDate = date;
    	}

    	$scope.hide=function(){
			$scope.$parent.showGlassNewPoll=false;
		};
}]);
