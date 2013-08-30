app.controller('PlanifController', ['$scope', 'Network', function($scope, $network) {
    

    $network.getProjets(function(projets) {
        $scope.projets = projets;
    });
}]);
