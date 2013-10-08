app.controller('PollController', ['$scope', '$location' , 'Network', '$routeParams', function($scope, $location, $network, $routeParams) {
 
  $network.getPoll(function(poll) {
    $scope.poll = poll;
    $scope.poll.formattedCreationDate = poll.creationDate.format($network.getDateFormat());
    $scope.poll.formattedUpdateDate = poll.updateDate.format($network.getDateFormat());
    $scope.poll.formattedStartDate = poll.startDate.format($network.getDateFormat());
    $scope.poll.formattedEndDate = poll.endDate.format($network.getDateFormat());

    now = moment();
    
    if (now.isAfter(poll.startDate) && now.isBefore(poll.endDate)) {
    	$scope.poll.status = "actif";
    } else {
    	$scope.poll.status = "inactif";
    }
        
  }, $routeParams.pollId);

}]);
