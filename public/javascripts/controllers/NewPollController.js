app.controller('NewPollController', ['$scope', 'Network', '$location',
	function($scope, $network, $location) {
    
    	$scope.poll = {};

	    $scope.createPoll = function() {    	
    		$network.createPoll($scope.poll);
            $scope.$parent.showGlassNewPoll=false;
    	};

    	$scope.startDateSelected = function(date) {
            console.log(date);
    		$scope.poll.startDate = date.moment;
    	}

    	$scope.endDateSelected = function(date) {
    		$scope.poll.endDate = date.moment;
    	}

    	$scope.hide=function(){
			$scope.$parent.showGlassNewPoll=false;
		};
}]);
