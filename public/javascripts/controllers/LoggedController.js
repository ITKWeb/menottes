app.controller('LoggedController', ['$scope', 'Network', function($scope, $network) {
    
    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
        $scope.$apply();    
    });
    
}]);
