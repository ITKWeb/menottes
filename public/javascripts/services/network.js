app.factory("Network", ["$http",
    function ($http) {
  
    var isMocked = true;
    var isLoginMocked = true;

    var projects = [{"id":1,"nom":"Projet1","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":2,"nom":"Projet2","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":3,"nom":"Projet3","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}];
    
    var polls = [{"id":1, "nom":"Bière en ville", "startDate":"2013-08-30T11:29:06.921Z","endDate":"2013-08-30T11:29:14.785Z","creationDate":"2013-08-30T11:32:13.809Z","updateDate":"2013-08-30T11:32:13.809Z"},
                 {"id":2, "nom":"Pétanque", "startDate":"2013-08-30T11:29:06.921Z","endDate":"2013-08-30T11:29:14.785Z","creationDate":"2013-08-30T11:32:13.809Z","updateDate":"2013-08-30T11:32:13.809Z"}];
    /*
    var completePolls=[
    
    {"id":1,"open":true,"open_date":"2013-08-30T11:29:06.921Z","close_date":"2013-08-30T11:29:14.785Z","created_at":"2013-08-30T11:32:13.809Z","updated_at":"2013-08-30T11:32:13.809Z","participants":[{"id":1,"created_at":"2013-08-30T11:32:18.818Z","updated_at":"2013-08-30T12:22:54.339Z","user_id":3,"choices":[{"id":1,"name":"monChoix1","created_at":"2013-08-30T11:27:48.278Z","updated_at":"2013-08-30T12:22:47.870Z","poll_id":1,"participant_id":1}]}]},
    
    {"id":1,"false":true,"open_date":"2013-08-30T11:29:06.921Z","close_date":"2013-08-30T11:29:14.785Z","created_at":"2013-08-30T11:32:13.809Z","updated_at":"2013-08-30T11:32:13.809Z","participants":[{"id":1,"created_at":"2013-08-30T11:32:18.818Z","updated_at":"2013-08-30T12:22:54.339Z","user_id":3,"choices":[{"id":1,"name":"monChoix2","created_at":"2013-08-30T11:27:48.278Z","updated_at":"2013-08-30T12:22:47.870Z","poll_id":2,"participant_id":5}]}]}
         
    ];*/

    var tickets = [{"id":4,"titre":"Documentation Agricommand","description":"Cuong doit écrire toute la doc car Nelly a la flemme","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3, "personne": "Anakin Skywalker"},
            {"id":3,"titre":"Migration Agricommand","description":"Nelly doit migrer Agricommand car Cuong lui passe le relai","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:32.179Z","updated_at":"2013-07-09T12:12:32.179Z","projet_id":3, "personne": "Luke Lucky"},
            {"id":2,"titre":"Documentation Agricommand","description":"Cuong doit écrire toute la doc car Nelly a la flemme","importance":null,"poids":null,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3, "personne": "Babar Léléfan"}];

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
    
    function getPolls(callback) {
      if(isMocked === true) {
        callback(polls);
      } else {
        $http.get("/polls")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    function getPoll(callback, pollId) {
      if(isMocked === true) {
        for (i=0;i<polls.length;i++) {
          if (polls[i] === pollId) {
            callback(polls[i]);
          }
        }
      } else {
        $http.get("/polls/"+pollId)
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
        callback(tickets);
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
     
      var data = {"nom": project.nom};
      if (isMocked === true) {
        data.id = projects[projects.length-1].id+1; // calculate id for new mocked project
        projects[projects.length] = data; // add new project to mocked projects list
      } else {
        var url = "/projets/";
        $http.post(url, data)
        .error(
          function(data, status, headers, config) {
            console.log(data, status, headers, config);
          }
        );
      }
    }

    function createTicket(ticket) {
     
      var data = {"titre": ticket.titre, "description": ticket.description, "trac_id": ticket.trac_id, "importance": ticket.importance};
      if (isMocked === true) {
        tickets[tickets.length] = data;
      } else {
        var url = "/tickets/";
        $http.post(url, data)
        .error(
          function(data, status, headers, config) {
            console.log(data, status, headers, config);
          }
        );
      }
    }

    function createPoll(poll) {
     
      var data = {"nom": poll.nom, "startDate":poll.startDate, "endDate":poll.endDate};
      console.log("test date " + new Date());
      if (isMocked === true) {
        data.id = polls[polls.length-1].id+1; // calculate id for new mocked poll
        polls[polls.length] = data; // add new poll to mocked polls list
      } else {
        var url = "/polls/";
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
      getPolls: function(callback) {
        getPolls(callback);
      },
      getPoll: function(callback, pollId) {
        getPoll(callback, pollId);
      },
      getSprints: function(callback, projectId) {
        getSprints(callback, projectId);
      },
      getTickets: function(callback, projectId, sprintId) {
        getTickets(callback, projectId, sprintId);
      },
      createProject: function(project) {
        createProject(project);
      },
      createTicket: function(ticket) {
        createTicket(ticket);
      },
      createPoll: function(poll) {
        createPoll(poll);
      }
    }

}]);
