app.controller('LoginController', ['$scope', 'Network', '$location', function($scope, $network, $location) {


    $scope.clickOnForgotten = function() {
        console.log("forgotten password");
        $scope.inputLogin = "aaa";
        $scope.inputPassword= "aaa";
    };

    $scope.clickOnLogin = function() {
        $network.login(function(user) {
            if (user === [{}]) {
                $scope.inputLogin = "";
                $scope.inputPassword= "";
                $scope.message = "Login ou mot de passe incorrect";
            } else {
                $location.path('/login');
            }
        }, $scope.inputLogin, $scope.inputPassword);
    }


}]);
