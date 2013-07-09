app.controller('LoginController', ['$scope', 'Network', '$location', function($scope, $network, $location) {
    
    $network.getProjets(function(projets) {
        $scope.projets = projets;
    });
    
    $scope.clickOnProjet = function(projet) {
        $location.path('/logged/'+projet.id);
    }
    
}]);
