app.factory("Network", ["$http",
    function ($http) {
  
    var isMocked = false;
    var isLoginMocked = true;
    var projects = [{"id":1,"nom":"Projet1","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"},
       {"id":2,"nom":"Projet2","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"},
       {"id":3,"nom":"Projet3","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}];


        function login(callback, errorCallback, login, password) {
          if (isLoginMocked === true) {
              if ((login === "aaa") && (password === "aaa")) {
                   callback(
                  {"id":1,"nom":"Test","login":"aaa","password":"aaa","email":"menottes@itkweb.com"}
              );
              } else {
                  callback({});
              }
          } else {
              $http.post("/users",{login:login, password:password})
                  .success(callback)
                  .error(errorCallback);
          }
      }

    function getProjets(callback) {
      if(isMocked === true) {
        callback(projects);
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
      if(isMocked === true) {
        callback([
          {id:0, nom:"Backlog"},
          {id:1, nom:"Sprint1"},
          {id:2, nom:"Sprint2"},
          {id:3, nom:"Sprint3"}
        ]);
      } else {
        $http.get("/sprints/"+projectId)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    function getTickets(callback, projectId, sprintId) {
      if(isMocked === true) {
        callback([
          {"id":4,"titre":"Documentation Agricommand","description":"Cuong doit écrire toute la doc car Nelly a la flemme","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3},
          {"id":5,"titre":"Migration Agricommand","description":"Nelly doit migrer Agricommand car Cuong lui passe le relai","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:32.179Z","updated_at":"2013-07-09T12:12:32.179Z","projet_id":3}
        ]);
      } else {
        var url = "/tickets/"+projectId+"/"+sprintId;
        $http.get(url)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }

    function createProject(project) {
     
      if (isMocked === true) {
        var data = {"nom":"4ptest"};
        projects[projects.length] = data;
      } else {
        var url = "/projets/";
        var data = {"nom": project.name};
        $http.post(url, data)
        .error(
          function(data, status, headers, config) {
            console.log(data, status, headers, config);
          }
        );
      }
    }
    
    return {
        login: function(callback, errorCallback, log, pass) {
            login(callback, errorCallback, log, pass);
        },
      getProjets: function(callback) {
        getProjets(callback);
      },
      getSprints: function(callback, projectId) {
        getSprints(callback, projectId);
      },
      getTickets: function(callback, projectId, sprintId) {
        getTickets(callback, projectId, sprintId);
      },
      createProject: function(project) {
        createProject(project);
      }
    }

}]);
