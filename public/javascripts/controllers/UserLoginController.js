app.controller('UserLoginController', ['$scope', 'Network', '$location', function($scope, $network, $location) {



    $scope.clickOnForgotten = function() {
        $scope.login = "aaa";
        $scope.password = "aaa";
        $scope.errorMessage = "forgotten password";
        console.log("forgotten password");
    };

    $scope.clickOnLogin = function() {
        $network.login(function(user) {
            if (user.id === undefined) {
                $scope.login = "";
                $scope.password= "";
                $scope.errorMessage = "Login ou mot de passe incorrect";
            } else {
                $location.path('/login');
            }
        }, function(data, status, headers, config) {
                $scope.errorMessage = status.toString();
                console.log(data, status, headers, config);
         }, $scope.login, $scope.password);
    }


}]);
