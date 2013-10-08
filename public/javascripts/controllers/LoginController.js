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

    $scope.newChoice = function(poll) {
      if (poll === undefined ){
	 $location.path('/choice');
      }else{
        $location.path('/choice/'+poll.id);
      }
    }
    
}]);
