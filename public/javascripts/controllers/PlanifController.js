




app.controller('PlanifController', ['$scope', 'Network', function($scope, $network) {

    $network.getProjets(function(projets) {
        $scope.projets = projets;
    });

    $network.getUsers(function(users) {
        $scope.users = users;
    });

	$scope.generatePlannif = function() {
        var toto = 0;
        if($scope.plannif.duree) var duree = $scope.plannif.duree;
        if($scope.plannif.velocite) var velocite = $scope.plannif.velocite;

        // pour chaque user sélectionné on compte le nombre de jour dispo
        angular.forEach($scope.users, function(user, i){
        	if(user.selected === true){
        		toto += duree - user.absence;
        	}
	    });
        	//console.log("Resultat = " + toto);

        //On multiplie par 2 pour le nombre de demi-journées
        toto = toto*2;
        	//console.log("Resultat = " + toto);

        //On applique la vélocité
        if(velocite) toto = toto*velocite;
        	//console.log("Resultat = " + toto);

        //On calcule pour chaque projet
		angular.forEach($scope.projets, function(projet, i){
        	if(projet.selected === true){
        		projet.plannif=toto*projet.pourcentage/100;
        		console.log(projet.nom + " = " + projet.plannif);
        	}
	    });
		
		$scope.$parent.showGlassPlanifResults=true; //afficher les résultats
    }

    $scope.hide=function(){
		$scope.$parent.showGlassPlanifResults=false;
	};


}]);

