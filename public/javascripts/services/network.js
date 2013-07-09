app.factory("Network", ["$http",
  function($http) {
  
    var isMocked = true;

    function getProjets(callback) {
      if(isMocked === true) {
        callback([
          {"id":1,"nom":"Projet1","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":2,"nom":"Projet2","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":3,"nom":"Projet3","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}]);
      } else {
        $http.get("/projets")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    function getSprints(callback, projectId) {
    console.log(projectId);
      if(isMocked === true) {
        callback([
          {"id":4,"titre":"Documentation Agricommand","description":"Cuong doit écrire toute la doc car Nelly a la flemme","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3},
          {"id":5,"titre":"Migration Agricommand","description":"Nelly doit migrer Agricommand car Cuong lui passe le relai","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:32.179Z","updated_at":"2013-07-09T12:12:32.179Z","projet_id":3}
        ]);
      } else {
        var url = "/tickets";
        if(projectId !== undefined) {
          url = "/tickets/"+projectId;
        }
        $http.get(url)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    return {
      getProjets: function(callback) {
        getProjets(callback);
      },
      getSprints: function(callback, projectId) {
        getSprints(callback,projectId);
      }
    }

}]);
