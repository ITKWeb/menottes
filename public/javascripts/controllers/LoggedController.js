app.controller('LoggedController', ['$scope', 'Network', '$routeParams', function($scope, $network, $routeParams) {
    
    $network.getSprints($routeParams.projectName, function(sprints) {
        $scope.sprints = sprints;
    });
    
}]);
