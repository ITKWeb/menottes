app.controller('LoggedController', ['$scope', 'Network', '$routeParams', function($scope, $network, $routeParams) {
    
    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
    }, $routeParams.projectId);
    
}]);
