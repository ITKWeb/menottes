app.controller('LoginController', ['$scope', 'Network', '$location', function($scope, $network, $location) {
    
    $network.getProjets(function(projets) {
        $scope.projets = projets;
    });
    
    $network.getPolls(function(polls){
      $scope.polls=polls;      
    });
    
    $scope.clickOnProjet = function(projet) {
        $location.path('/logged/'+projet.id);
    }

    $scope.createProjet = function() {
    	$location.path('/projets');
	}

    $scope.newPlanif = function() {
        $location.path('/planif');
    }

    $scope.createPoll = function() {
        console.log("create poll in LoginController");
        $location.path('/polls');
    }

    $scope.clickOnPoll = function(poll) {
        $location.path('/polls/'+poll.id);
    }
    
    
}]);
